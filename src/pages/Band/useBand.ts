import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBands } from "../../hooks/useBands";
import { api } from "../../services/api";
import { Album, Band as BandType } from "../../types/types";

export const useBand = () => {
  const { id } = useParams<{ id: string }>();
  const [band, setBand] = useState({} as BandType);
  const { bandsRef, isLoading } = useBands();
  const [albums, setAlbums] = useState([] as Album[]);
  const [albumsIsLoading, setAlbumsIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState({} as Album);

  // Notes:
  // In the context of this exercise, it would be better to get bands from the bands context, because there are only 32 items and we could reuse this data throughout the page with a single request to the endpoint. However, in a real-world scenario, we should retrieve data from an endpoint that provides only the entity by its ID. For this reason, I implemented the solution using the bands context primarily to illustrate how we could adopt this approach and also because we already have the base data (everything except albums) on the home page. If a user refreshes or accesses this page directly, we call the API to get the band by ID.
  // For large and complex applications, it's recommended to use a state manager like Redux, Mobx, Zustand, etc. I chose to use the context API here to keep this project as close to the "native way" as possible.

  useEffect(() => {
    if (bandsRef.length > 0) {
      const band = bandsRef.find((band) => band.id === id);
      if (band) setBand(band);
    } else {
      api
        .get(`/bands/${id}`)
        .then((res) => {
          setBand(res.data);
        })
        .catch(() => alert("não foi possível listar a banda"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (!band.albums) return;
    async function getAlbums() {
      try {
        const albumsPromises = band.albums.map(async (albumId: string) => {
          return (await api.get(`/albums/${albumId}`)).data;
        });
        const albums = await Promise.all(albumsPromises);
        setAlbums(albums);
        setAlbumsIsLoading(false);
      } catch {
        alert("was not possible to load the bands");
      }
    }
    getAlbums();
  }, [band]);

  const [bioIsExpanded, setBioIsExpanded] = useState(false);

  const handleExpandBiography = () => {
    setBioIsExpanded(!bioIsExpanded);
  };

  return { albums, albumsIsLoading, band, bandsRef, bioIsExpanded, currentAlbum, handleExpandBiography, id, isLoading, isModalOpen, setAlbums, setIsModalOpen, setCurrentAlbum };
};

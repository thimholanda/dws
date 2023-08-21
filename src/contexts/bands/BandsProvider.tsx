import { useEffect, useRef, useState } from "react";

import { api } from "../../services/api";
import { Band } from "../../types/types";
import { bandsContext } from "./bandsContext";

type BandsProviderProps = {
  children: React.ReactNode;
};

export const BandsProvider = ({ children }: BandsProviderProps) => {
  const [bands, setBands] = useState<Band[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [orderStrategy, setOrderStrategy] = useState<"name" | "numPlays">("name");
  const [isLoading, setIsLoading] = useState(true);
  const bandsRef = useRef<Band[]>([]);
  const genreListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    api
      .get("/bands")
      .then((res) => {
        const data: Band[] = res.data;

        data.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });

        setBands(data);
        bandsRef.current = data;
        setIsLoading(false);

        const genresSet = new Set<string>();
        res.data.map((band: Band) => genresSet.add(band.genre.toLocaleLowerCase()));
        const genresArr = [...genresSet];
        genresArr.sort();
        genresArr.unshift("all");
        setGenres([...genresArr]);
      })
      .catch(() => console.log("api error"));
  }, []);

  const handleOrderBands = (strategy: "name" | "numPlays") => {
    setOrderStrategy(strategy);
    const bandsArr = bands.length === 0 ? [...bandsRef.current] : [...bands];
    bandsArr.sort((a, b) => {
      if (a[strategy] > b[strategy]) return strategy === "name" ? 1 : -1;
      if (a[strategy] < b[strategy]) return strategy === "name" ? -1 : 1;
      return 0;
    });
    setBands(bandsArr);
  };

  const handleSearch = (value: string) => {
    const filterValue = value.toLocaleLowerCase();
    setOrderStrategy("name");
    setSelectedGenre("all");
    genreListRef.current!.scrollLeft = 0;

    setSearchValue(filterValue);
    const bandsArr = [...bandsRef.current];
    const filterArr = bandsArr.filter((band) => band.name.toLocaleLowerCase().includes(filterValue));
    setBands(filterArr);
  };

  const handleCleanSearch = () => {
    setSearchValue("");
    setSelectedGenre("all");
    genreListRef.current!.scrollLeft = 0;
    setBands([...bandsRef.current]);
  };

  const handleFilterByGenre = (genre: string) => {
    setSearchValue("");
    setSelectedGenre(genre);
    setOrderStrategy("name");
    if (genre == "all") return setBands([...bandsRef.current]);
    const bandsArr = [...bandsRef.current];
    const filterArr = bandsArr.filter((band) => band.genre.toLocaleLowerCase() === genre);
    setBands(filterArr);
  };

  const handleGenreChange = (value: string) => {
    handleFilterByGenre(value);
  };

  const handleInputSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputSearchValue(value);

    if (value === "") {
      handleCleanSearch();
    }
  };

  const handleResetInputSearchByGenre = () => {
    setInputSearchValue("");
  };

  return <bandsContext.Provider value={{ bands, genres, selectedGenre, orderStrategy, bandsRef: bandsRef.current, genreListRef, searchValue, isLoading, handleGenreChange, handleInputSearchChange, handleResetInputSearchByGenre, inputSearchValue, setInputSearchValue, handleOrderBands, handleSearch, handleCleanSearch, handleFilterByGenre }}>{children}</bandsContext.Provider>;
};

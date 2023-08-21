import dompurify from "dompurify";
import { FiChevronLeft, FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "../../assets/isobarfm.png";
import noImg from "../../assets/no-image.png";
import { AlbumModal } from "../../components/BandInfoComponents/AlbumModal";
import stylesBand from "../../components/BandInfoComponents/BandInfoComponents.module.css";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import styles from "../../components/Header/Header.module.css";
import { Loader } from "../../components/Loader";
import { Logo } from "../../components/Logo";
import { HEADER_HEIGHT } from "../../constants/layout";
import { Album } from "../../types/types";
import { ImageWithFallback } from "../../utils/components/ImageWithFallback";
import { useBand } from "./useBand";

const Band = () => {
  const { albums, albumsIsLoading, band, bioIsExpanded, currentAlbum, handleExpandBiography, isLoading, isModalOpen, setCurrentAlbum, setIsModalOpen } = useBand();

  return (
    <Container paddingTop={`${HEADER_HEIGHT}rem`}>
      <Header>
        <Link to={"/"}>
          <FiChevronLeft color="white" size="2.5rem" />
        </Link>
        <div className={styles["header--align-center"]}>
          <Logo image={logo} altText="Logo of Isobar FM" />
        </div>
      </Header>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={stylesBand["band-hero-section"]} style={{ backgroundImage: `url(${band.image})` }}>
            <div className={stylesBand["band-hero-section__mask"]}></div>
            <h2 className={stylesBand["band-hero-section__band-name"]}>{band.name}</h2>
            <img className={stylesBand["band-hero-section__band-image"]} src={band.image} alt={band.name} />
            <div className={stylesBand["band-hero-section__band-infos"]}>
              <span className={stylesBand["band-hero-section__band-infos-item"]}>{band.genre}</span>
              <span className={stylesBand["band-hero-section__band-infos-item"]}>{band.numPlays && band.numPlays.toLocaleString("en")} plays</span>
            </div>
          </div>

          <div className={`${stylesBand["band-biography"]} ${bioIsExpanded && stylesBand["band-biography--expanded"]}`}>
            {!bioIsExpanded && <div className={stylesBand["band-biography__mask"]}></div>}

            <p className={`${stylesBand["band-biography__text"]} `} dangerouslySetInnerHTML={{ __html: dompurify.sanitize(band.biography) }}></p>
          </div>

          <div className={stylesBand["band-biography__btn-expand-wrapper"]}>
            <button onClick={handleExpandBiography} className={stylesBand["band-biography__btn-expand"]}>
              <hr />
              <i>{!bioIsExpanded ? <FiPlus size="2rem" color="#686876" /> : <FiMinus size="2rem" color="#686876" />}</i>
            </button>
          </div>

          <h3 className={stylesBand["band-albuns__title"]}>ALBUNS</h3>

          {albumsIsLoading ? (
            <Loader />
          ) : (
            <ul className={stylesBand["band-albuns__grid"]}>
              {albums.length > 0 &&
                albums.map((album: Album) => (
                  <li key={album.id}>
                    <button
                      onClick={() => {
                        setCurrentAlbum(album);
                        setIsModalOpen(true);
                      }}
                    >
                      <div className={stylesBand["band-albuns__grid-mask"]}></div>

                      <ImageWithFallback alt={album.name} fallback={noImg} src={album.image} />

                      <div className={stylesBand["band-albuns__grid-infos"]}>{album.name}</div>
                    </button>
                  </li>
                ))}
            </ul>
          )}
          {isModalOpen && <AlbumModal album={currentAlbum} onClose={() => setIsModalOpen(false)} />}
        </>
      )}
    </Container>
  );
};

export default Band;

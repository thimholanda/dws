import { BandFilter } from "../../components/BandFilterComponents";
import { BandList } from "../../components/BandListComponents";
import { Container } from "../../components/Container";
import { GenreList } from "../../components/GenreListComponents";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { Logo } from "../../components/Logo";
import { SearchBox } from "../../components/SearchBox";
import { BAND_FILTER_HEIGHT, BAND_GENRES_HEIGHT, HEADER_HEIGHT } from "../../constants/layout";
import { useHome } from "./useHome";
import logo from "../../assets/isobarfm.png";

function Home() {
  const { bands, genres, selectedGenre, orderStrategy, genreListRef, isLoading, handleOrderBands, handleInputSearchChange, handleResetInputSearchByGenre, inputSearchValue, setInputSearchValue, handleSearch, handleCleanSearch, handleGenreChange, searchValue } = useHome();

  return (
    <Container paddingTop={`${HEADER_HEIGHT + BAND_FILTER_HEIGHT + BAND_GENRES_HEIGHT}rem`}>
      <Header>
        <SearchBox setInputSearchValue={setInputSearchValue} inputSearchValue={inputSearchValue} handleInputSearchChange={handleInputSearchChange} handleCleanSearch={handleCleanSearch} handleSearch={handleSearch} />
        <Logo image={logo} altText="Logo of Isobar FM" />
      </Header>

      <BandFilter isLoading={isLoading} orderStrategy={orderStrategy} bands={bands} handleOrderBands={handleOrderBands} searchValue={searchValue} />

      <GenreList genreListRef={genreListRef} handleResetInputSearchByGenre={handleResetInputSearchByGenre} genres={genres} selectedGenre={selectedGenre} handleGenreChange={handleGenreChange} />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BandList bands={bands} />
        </>
      )}
    </Container>
  );
}

export default Home;

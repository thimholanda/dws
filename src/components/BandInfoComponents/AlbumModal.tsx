import { ImageWithFallback } from "../../utils/components/ImageWithFallback";
import noImg from "../../assets/no-image.png";
import { IoClose } from "react-icons/io5";
import { BsMusicNoteList } from "react-icons/bs";
import stylesModal from "./AlbumModal.module.css";
import { AlbumModalProps } from "./types";

const AlbumModal = ({ album, onClose }: AlbumModalProps) => {
  const dataString = album.releasedDate;
  const dataObj = new Date(dataString);

  const secondsToMinutesAndSeconds = (duration: string) => {
    const minutes = Math.floor(Number(duration) / 60);
    const seconds = Number(duration) % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const formatedReleasedData = dataObj.toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className={stylesModal["album-modal"]}>
      <div className={stylesModal["album-modal__container"]}>
        <button onClick={onClose}>
          <IoClose size="2.5rem" />
        </button>
        <h2>{album.name}</h2>
        <ImageWithFallback alt={album.name} fallback={noImg} src={album.image} />

        <p>
          <strong>Released date:</strong> {formatedReleasedData}
        </p>
        <p>
          <strong>Tracks:</strong>
        </p>

        <ul>
          {album.tracks.map((track) => (
            <li key={track.id}>
              <span style={{ marginRight: "10px" }}>
                <BsMusicNoteList color="#f04d25" />
              </span>
              <span>
                {track.name} | {secondsToMinutesAndSeconds(track.duration).toString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { AlbumModal };

export type AlbumModalProps = {
  album: {
    name: string;
    releasedDate: string;
    image: string;
    tracks: [
      {
        id: string;
        name: string;
        duration: string;
      }
    ];
  };
  onClose: () => void;
};

export type Album = Pick<AlbumModalProps, "album">;

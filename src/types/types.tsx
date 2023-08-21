export type Band = {
  id: string;
  name: string;
  image: string;
  numPlays: number;
  genre: string;
  biography: string;
  albums: string[];
};

export type Album = {
  id: string;
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

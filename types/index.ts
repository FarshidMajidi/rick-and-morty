export type LocationInfoProps = {
  dimension: string;
  name: string;
};

export type EpisodeInfoProps = {
  air_date: string;
  name: string;
};

type Info = {
  count: number;
  pages: number;
};

export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
};

export type CharacterResponse = {
  info: Info;
  results: Character[];
};

export type PaginationProps = {
  pageNumber: number;
  info: Info;
};

export type LocationResponse = {
  info: Info;
  results: Location[];
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
};

export type CharacterDetail = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
};

type CharacterLocation = {
  name: string;
  url: string;
};

export type LocationDetail = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
};

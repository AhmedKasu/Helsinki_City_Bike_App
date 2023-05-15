export interface Journey {
  id: string;
  departure: string;
  return: string;
  departureStationId: number;
  returnStationName: string;
  returnStationId: number;
  departureStationName: string;
  coveredDistanceMeters: number;
  durationSeconds: number;
}

export interface PaginationDetails {
  resultsTotal: number;
  limit: number;
  currentPage: number;
  nextPage: boolean;
  previousPage: boolean;
}

export interface Station {
  id: number;
  nimi: string;
  osoite: string;
  kaupunki: string;
  operaattor: string;
  kapasiteet: number;
  x: number;
  y: number;
}

export type GetStation = Station & StationDetails;
export interface StationDetails {
  journeysStarting: {
    count: number;
    averageDistanceMeters: number;
    mostPopular:
      | {
          returnStationName: string;
          journeys: number;
        }[]
      | [];
  };
  journeysEnding: {
    count: number;
    averageDistanceMeters: number;
    mostPopular:
      | {
          departureStationName: string;
          journeys: number;
        }[]
      | [];
  };
}

export type JourneysQuery = {
  departureStationName?: string;
  returnStationName?: string;
  coveredDistanceMeters?: number;
  durationSeconds?: number;
  orderBy?: SortOrders;
};
export interface SearchVariables {
  departureStationName: string;
  returnStationName: string;
}
export interface FilterVariables {
  coveredDistanceMeters: number;
  durationSeconds: number;
}
export interface FilterParserArgs {
  distance: string;
  duration: string;
}

export type SortOrder = 'asc' | 'desc';
export interface SortOrders {
  departureStationName: SortOrder;
  returnStationName: SortOrder;
  durationSeconds: SortOrder;
  coveredDistanceMeters: SortOrder;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

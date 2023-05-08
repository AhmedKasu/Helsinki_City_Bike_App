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

export type JourneysQuery = {
  departureStationName?: string;
  returnStationName?: string;
  coveredDistanceMeters?: number;
  durationSeconds?: number;
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

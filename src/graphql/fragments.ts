import { gql } from '@apollo/client';

export const JOURNEY_PARTS = gql`
  fragment JourneyParts on Journey {
    id
    departure
    return
    departureStationId
    returnStationName
    returnStationId
    departureStationName
    coveredDistanceMeters
    durationSeconds
  }
`;

export const STATION_PARTS = gql`
  fragment StationParts on Station {
    id
    nimi
    osoite
    kaupunki
    operaattor
    kapasiteet
    x
    y
  }
`;

export const PAGINATION_DETAILS = gql`
  fragment PaginationDetails on PaginationDetails {
    resultsTotal
    limit
    currentPage
    nextPage
    previousPage
  }
`;

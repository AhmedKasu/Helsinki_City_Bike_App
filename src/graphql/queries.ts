import { gql } from '@apollo/client';
import { JOURNEY_PARTS, STATION_PARTS, PAGINATION_DETAILS } from './fragments';

export const GET_JOURNEYS = gql`
  ${JOURNEY_PARTS}
  ${PAGINATION_DETAILS}
  query AllJourneys(
    $coveredDistanceMeters: Int
    $durationSeconds: Int
    $departureStationName: String
    $returnStationName: String
    $orderBy: OrderBy
    $currentPage: Int
  ) {
    allJourneys(
      coveredDistanceMeters: $coveredDistanceMeters
      durationSeconds: $durationSeconds
      departureStationName: $departureStationName
      returnStationName: $returnStationName
      orderBy: $orderBy
      currentPage: $currentPage
    ) {
      journeys {
        ...JourneyParts
      }
      paginationDetails {
        ...PaginationDetails
      }
    }
  }
`;

export const SEARCH_STATION = gql`
  query SearchStation($nimi: String!) {
    searchStation(nimi: $nimi)
  }
`;

export const GET_STATIONS = gql`
  ${STATION_PARTS}
  ${PAGINATION_DETAILS}
  query AllStations {
    allStations {
      stations {
        ...StationParts
      }
      paginationDetails {
        ...PaginationDetails
      }
    }
  }
`;

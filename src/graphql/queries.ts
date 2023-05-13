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
  query AllStations($currentPage: Int) {
    allStations(currentPage: $currentPage) {
      stations {
        ...StationParts
      }
      paginationDetails {
        ...PaginationDetails
      }
    }
  }
`;

export const GET_STATION = gql`
  query GetStation($nimi: String!, $month: Int) {
    getStation(nimi: $nimi, month: $month) {
      id
      nimi
      osoite
      kaupunki
      operaattor
      kapasiteet
      x
      y
      journeysStarting {
        count
        averageDistanceMeters
        mostPopular {
          returnStationName
          journeys
        }
      }
      journeysEnding {
        count
        averageDistanceMeters
        mostPopular {
          departureStationName
          journeys
        }
      }
    }
  }
`;

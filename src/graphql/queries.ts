import { gql } from '@apollo/client';
import { JOURNEY_PARTS } from './fragments';

export const GET_JOURNEYS = gql`
  ${JOURNEY_PARTS}
  query AllJourneys(
    $coveredDistanceMeters: Int
    $durationSeconds: Int
    $returnStationName: String
    $departureStationName: String
    $orderBy: OrderBy
  ) {
    allJourneys(
      coveredDistanceMeters: $coveredDistanceMeters
      durationSeconds: $durationSeconds
      returnStationName: $returnStationName
      departureStationName: $departureStationName
      orderBy: $orderBy
    ) {
      journeys {
        ...JourneyParts
      }
    }
  }
`;

export const SEARCH_STATION = gql`
  query SearchStation($nimi: String!) {
    searchStation(nimi: $nimi)
  }
`;

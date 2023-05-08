import { gql } from '@apollo/client';
import { JOURNEY_PARTS } from './fragments';

export const GET_JOURNEYS = gql`
  ${JOURNEY_PARTS}
  query AllJourneys(
    $departureStationName: String
    $returnStationName: String
    $coveredDistanceMeters: Int
    $durationSeconds: Int
  ) {
    allJourneys(
      departureStationName: $departureStationName
      returnStationName: $returnStationName
      coveredDistanceMeters: $coveredDistanceMeters
      durationSeconds: $durationSeconds
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

import { gql } from '@apollo/client';
import { JOURNEY_PARTS } from './fragments';

export const GET_JOURNEYS = gql`
  ${JOURNEY_PARTS}
  query AllJourneys($departureStationName: String, $returnStationName: String) {
    allJourneys(
      departureStationName: $departureStationName
      returnStationName: $returnStationName
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

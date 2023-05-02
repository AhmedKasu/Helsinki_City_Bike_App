import { gql } from '@apollo/client';

export const GET_JOURNEYS = gql`
  query AllJourneys {
    allJourneys {
      journeys {
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
    }
  }
`;

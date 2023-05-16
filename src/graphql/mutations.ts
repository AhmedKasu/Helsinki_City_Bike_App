import { gql } from '@apollo/client';

export const ADD_JOURNEY = gql`
  mutation AddJourney($journeyInput: JourneyInput) {
    addJourney(journeyInput: $journeyInput) {
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
`;

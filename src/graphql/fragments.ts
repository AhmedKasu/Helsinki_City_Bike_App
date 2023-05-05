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

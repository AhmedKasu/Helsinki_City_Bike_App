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

export const PAGINATION_DETAILS = gql`
  fragment PaginationDetails on PaginationDetails {
    resultsTotal
    limit
    currentPage
    nextPage
    previousPage
  }
`;

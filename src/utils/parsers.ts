import { FilterParserArgs, FilterVariables } from '../types';

export const parseFilter = (variables: FilterParserArgs): FilterVariables => {
  return {
    durationSeconds: variables.duration
      ? parseFloat(variables.duration) * 60
      : 10,
    coveredDistanceMeters: variables.distance
      ? parseFloat(variables.distance) * 1000
      : 10,
  };
};

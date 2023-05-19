import { FilterParserArgs, FilterVariables } from '../types';
import { FormData } from '../components/Journey/AddJourneyForm';

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

const zeroStart = /^0\.[0-9].*$/;

export const metersToKm = (meters: number) => {
  const km = meters * 0.001;
  return zeroStart.test(km.toString()) ? km.toFixed(2) : Math.round(km);
};

export const secondToMin = (seconds: number) => {
  const mins = seconds / 60;
  Math.round(seconds / 60);
  return zeroStart.test(mins.toString())
    ? mins.toFixed(2)
    : Math.round(mins).toLocaleString('en-US');
};

export const parseAddJourneyInputs = (inputs: FormData) => {
  return {
    ...inputs,
    durationSeconds: parseInt(inputs.durationSeconds),
    coveredDistanceMeters: parseInt(inputs.coveredDistanceMeters),
  };
};

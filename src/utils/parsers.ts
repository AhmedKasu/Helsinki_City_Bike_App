import { FilterParserArgs, FilterVariables } from '../types';
import { FormData } from '../components/Journey/AddJourneyForm';

export const parseFilter = (variables: FilterParserArgs): FilterVariables => {
  return {
    durationSeconds: variables.duration
      ? parseFloat(variables.duration) * 60
      : 10,
    coveredDistanceMeters: variables.distance
      ? // - 500 to cover for value lost when rounding km to display
        parseFloat(variables.distance) * 1000 - 500
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
    coveredDistanceMeters: parseInt(inputs.coveredDistanceMeters),
  };
};

export const isValidReturn = (time: { departure: string; return: string }) => {
  return (
    new Date(time.return).getTime() - new Date(time.departure).getTime() > 0
  );
};

export const isValidDate = (date: string): boolean => {
  return Boolean(Date.parse(date)) && new Date(date) < new Date(Date.now());
};

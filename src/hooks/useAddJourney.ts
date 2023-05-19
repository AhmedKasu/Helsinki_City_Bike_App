import { useMutation } from '@apollo/client';

import { ADD_JOURNEY } from '../graphql/mutations';

interface FormData {
  departure: string;
  return: string;
  departureStationName: string;
  returnStationName: string;
  coveredDistanceMeters: number;
}

const useAddJourney = () => {
  const [mutate, result] = useMutation(ADD_JOURNEY);

  const addJourney = async (journeyInput: FormData) => {
    await mutate({ variables: { journeyInput } });
  };

  return { addJourney, result };
};

export default useAddJourney;

import { useRef, useEffect } from 'react';
import { UseFormWatch } from 'react-hook-form';

import useStationAutoComplete from './useStationAutoComplete';

interface EventValue {
  name: string | undefined;
  type: string | undefined;
}

const useStationWatch = (
  watch: UseFormWatch<any> // eslint-disable-line @typescript-eslint/no-explicit-any
) => {
  const eventType = useRef<EventValue>({ name: undefined, type: undefined });

  useEffect(() => {
    const subscription = watch((_value, { name, type }) => {
      eventType.current = { name, type };
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const { name, type } = eventType.current;

  const departuresWatch = watch('departureStationName');
  const { data: departures } = useStationAutoComplete(departuresWatch);
  const departureSuggestions =
    departures && name === 'departureStationName' && type !== undefined
      ? departures?.searchStation
      : [];

  const returnsWatch = watch('returnStationName');
  const { data: returns } = useStationAutoComplete(returnsWatch);
  const returnsSuggestions =
    returns && name === 'returnStationName' && type !== undefined
      ? returns?.searchStation
      : [];

  return {
    departureSuggestions,
    returnsSuggestions,
  };
};

export default useStationWatch;

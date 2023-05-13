import { useRef, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import TextInput from './Form/TextInput';
import useStationAutoComplete from '../hooks/useStationAutoComplete';

interface EventValue {
  type: string | undefined;
}

interface Props {
  onSearchStation: (station: string) => void;
}

const SearchStationForm = ({ onSearchStation }: Props) => {
  const methods = useForm<{ station: string }>();

  const eventType = useRef<EventValue>({ type: undefined });
  const { type } = eventType.current;

  useEffect(() => {
    const subscription = methods.watch((_value, { type }) => {
      eventType.current = { type };
    });
    return () => subscription.unsubscribe();
  }, [methods.watch]);

  useEffect(() => {
    if (station && type === undefined) onSearchStation(station);
  }, [type]);

  const station = methods.watch('station', '');
  const { data: stations } = useStationAutoComplete(station);
  const stationsSuggestions =
    station && type !== undefined ? stations?.searchStation : [];

  return (
    <FormProvider {...methods}>
      <TextInput
        name='station'
        placeholder='Search station'
        autoCompleteItems={stationsSuggestions}
      />
    </FormProvider>
  );
};

export default SearchStationForm;

import { useEffect, useRef } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import useStationAutoComplete from '../hooks/useStationAutoComplete';

import Form from './Form';
import TextInput from './Form/TextInput';
import SubmitButton from './Form/SubmitButton';
interface Props {
  onSubmit: (variables: FieldValues) => void;
}
interface EventValue {
  name: string | undefined;
  type: string | undefined;
}

const schema = z.object({
  departureStationName: z.string().nonempty('Station name is required!'),
  returnStationName: z.string().nonempty('Station name is required!'),
});

type FormData = z.infer<typeof schema>;

const SearchJourneyForm = ({ onSubmit }: Props) => {
  const methods = useForm<FormData>({
    defaultValues: {
      departureStationName: '',
      returnStationName: '',
    },
    resolver: zodResolver(schema),
  });
  const eventType = useRef<EventValue>({ name: undefined, type: undefined });

  useEffect(() => {
    const subscription = methods.watch((_value, { name, type }) => {
      eventType.current = { name, type };
    });
    return () => subscription.unsubscribe();
  }, [methods.watch]);

  const { name, type } = eventType.current;

  const departuresWatch = methods.watch('departureStationName');
  const { data: departures } = useStationAutoComplete(departuresWatch);
  const departureSuggestions =
    departures && name === 'departureStationName' && type !== undefined
      ? departures?.searchStation
      : [];

  const returnsWatch = methods.watch('returnStationName');
  const { data: returns } = useStationAutoComplete(returnsWatch);
  const returnsSuggestions =
    returns && name === 'returnStationName' && type !== undefined
      ? returns?.searchStation
      : [];

  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit}>
        <TextInput
          name='departureStationName'
          placeholder='Departure station'
          autoCompleteItems={departureSuggestions}
        />

        <TextInput
          name='returnStationName'
          placeholder='Return station'
          autoCompleteItems={returnsSuggestions}
        />
        <SubmitButton label='Search' />
      </Form>
    </FormProvider>
  );
};

export default SearchJourneyForm;

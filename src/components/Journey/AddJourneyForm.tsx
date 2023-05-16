import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import { Box, Center, CircularProgress, Text } from '@chakra-ui/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Form from '../Form';
import NumberInput from '../Form/NumberInput';
import SubmitButton from '../Form/SubmitButton';
import TextInput from '../Form/TextInput';
import { useRef, useEffect } from 'react';
import useStationAutoComplete from '../../hooks/useStationAutoComplete';
import useAddJourney from '../../hooks/useAddJourney';

interface EventValue {
  name: string | undefined;
  type: string | undefined;
}

const schema = z.object({
  departure: z.string().nonempty('Departure date is required!'),
  return: z.string().nonempty('Return date is required!'),
  departureStationName: z.string().nonempty('Station name is required!'),
  returnStationName: z.string().nonempty('Station name is required!'),
  coveredDistanceMeters: z.string().nonempty('Distance name is required!'),
  durationSeconds: z.string().nonempty('Durration name is required!'),
});

export type FormData = z.infer<typeof schema>;

const AddJourneyForm = () => {
  const {
    addJourney,
    result: { data, loading },
  } = useAddJourney();

  const methods = useForm<FormData>({
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

  const handleAddJourney = async (variables: FieldValues) => {
    const formData = {
      ...(variables as FormData),
      durationSeconds: parseInt(variables.durationSeconds),
      coveredDistanceMeters: parseInt(variables.coveredDistanceMeters),
    };
    try {
      await addJourney(formData);
    } catch (e) {
      console.error(e);
    }
  };

  console.log(data);
  if (loading)
    return (
      <Center>
        <CircularProgress isIndeterminate color='green.300' marginTop={'40%'} />
      </Center>
    );

  return (
    <Center>
      <Box w={{ lg: '50%', sm: '80%' }} pt={70}>
        <FormProvider {...methods}>
          <Form onSubmit={handleAddJourney}>
            <Text pl={2}>Departure</Text>
            <TextInput
              name='departure'
              placeholder='Departure'
              autoCompleteItems={[]}
              otherProps={{ type: 'datetime-local' }}
            />

            <Text pl={2}>Return</Text>
            <TextInput
              autoCompleteItems={[]}
              name='return'
              placeholder='Return'
              otherProps={{ type: 'datetime-local' }}
            />

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

            <NumberInput
              max={9999999}
              name='coveredDistanceMeters'
              placeholder='Distance (Meters)'
            />
            <NumberInput
              max={9999999}
              name='durationSeconds'
              placeholder='Duration (Seconds)'
            />
            <SubmitButton label='Add Journey' />
          </Form>
        </FormProvider>
      </Box>
    </Center>
  );
};

export default AddJourneyForm;

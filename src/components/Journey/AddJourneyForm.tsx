import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import {
  Box,
  Center,
  CircularProgress,
  Text,
  useToast,
} from '@chakra-ui/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import Form from '../Form';
import NumberInput from '../Form/NumberInput';
import SubmitButton from '../Form/SubmitButton';
import TextInput from '../Form/TextInput';

import useAddJourney from '../../hooks/useAddJourney';
import useStationWatch from '../../hooks/useStationWatch';

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
    result: { loading },
  } = useAddJourney();

  const toast = useToast();
  const navigate = useNavigate();

  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { departureSuggestions, returnsSuggestions } = useStationWatch(
    methods.watch
  );

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
      toast({
        isClosable: true,
        status: 'error',
        title: 'Failed to add Journey',
        position: 'top',
      });
      return;
    }

    toast({
      isClosable: true,
      status: 'success',
      title: 'Journey succesfully added',
      position: 'top',
    });
    navigate('/');
  };

  if (loading)
    return (
      <Center>
        <CircularProgress isIndeterminate color='green.300' marginTop={'40%'} />
      </Center>
    );

  return (
    <Center>
      <Box w={{ lg: '50%', sm: '80%' }} pt={70} pos='relative'>
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

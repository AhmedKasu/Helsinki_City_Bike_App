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
import {
  isValidDate,
  isValidReturn,
  parseAddJourneyInputs,
} from '../../utils/parsers';

let departureDate: string;
const schema = z.object({
  departure: z
    .string()
    .nonempty('Departure date is required!')
    .refine((d) => (departureDate = d)),
  return: z
    .string()
    .nonempty('Return date is required!')
    .superRefine((r, ctx) => {
      if (!isValidReturn({ return: r, departure: departureDate })) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Return time can not be before or equal to departure',
        });
      }
      if (!isValidDate(r)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Return date can not be in the future',
        });
      }
    }),
  departureStationName: z.string().nonempty('Station name is required!'),
  returnStationName: z.string().nonempty('Station name is required!'),
  coveredDistanceMeters: z
    .string()
    .nonempty('Distance name is required!')
    .refine((distance) => parseInt(distance) >= 10, {
      message: 'You can only add journeys that cover more than 10 meters',
    }),
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
    console.log(variables);

    try {
      await addJourney(parseAddJourneyInputs(variables as FormData));
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
            <SubmitButton label='Add Journey' />
          </Form>
        </FormProvider>
      </Box>
    </Center>
  );
};

export default AddJourneyForm;

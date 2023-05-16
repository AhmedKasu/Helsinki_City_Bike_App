import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Form from '../Form';
import TextInput from '../Form/TextInput';
import SubmitButton from '../Form/SubmitButton';

import useStationWatch from '../../hooks/useStationWatch';
interface Props {
  onSubmit: (variables: FieldValues) => void;
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

  const { departureSuggestions, returnsSuggestions } = useStationWatch(
    methods.watch
  );

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

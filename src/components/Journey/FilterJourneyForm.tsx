import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import Form from '../Form';
import NumberInput from '../Form/NumberInput';
import SubmitButton from '../Form/SubmitButton';

interface FormData {
  distance: string;
  duration: string;
}

interface Props {
  onSubmit: (variables: FieldValues) => void;
}

const FilterJourneyForm = ({ onSubmit }: Props) => {
  const methods = useForm<FormData>({
    defaultValues: { distance: '', duration: '' },
  });

  const { isDirty } = methods.formState;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit}>
        <NumberInput name='distance' placeholder='Distance (km)' />
        <NumberInput name='duration' placeholder='Duration (mins)' />
        <SubmitButton label='Filter' isDisabled={isDirty ? false : true} />
      </Form>
    </FormProvider>
  );
};

export default FilterJourneyForm;

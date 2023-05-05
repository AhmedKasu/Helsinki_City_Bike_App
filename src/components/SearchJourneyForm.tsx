import { FieldValues } from 'react-hook-form';

import Form from './Form';
import TextInput from './Form/TextInput';
import SubmitButton from './Form/SubmitButton';

interface Props {
  onSubmit: (variables: FieldValues) => void;
}

const SearchJourneyForm = ({ onSubmit }: Props) => {
  return (
    <Form onSubmit={onSubmit}>
      <TextInput name='departureStationName' placeholder='Departure satation' />
      <SubmitButton label='Search' />
    </Form>
  );
};

export default SearchJourneyForm;

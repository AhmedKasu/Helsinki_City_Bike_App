import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import styles from '../../utils/styles';
import FormError from './FormError';

interface Props {
  name: string;
  placeholder: string;
  min?: number;
  max?: number;
}

const NumberInput = ({ name, min = 0, max = 50, placeholder }: Props) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const error = errors[name]?.message;

  return (
    <>
      <ChakraNumberInput min={min} max={max} w={styles.input.maxWidth}>
        <NumberInputField {...register(name)} placeholder={placeholder} />
      </ChakraNumberInput>
      {error && <FormError error={error as string} />}
    </>
  );
};

export default NumberInput;

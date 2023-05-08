import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import styles from '../../utils/styles';

interface Props {
  name: string;
  placeholder: string;
  min?: number;
  max?: number;
}

const NumberInput = ({ name, min = 0, max = 50, placeholder }: Props) => {
  const { register } = useFormContext();

  return (
    <ChakraNumberInput min={min} max={max} w={styles.input.maxWidth}>
      <NumberInputField {...register(name)} placeholder={placeholder} />
    </ChakraNumberInput>
  );
};

export default NumberInput;

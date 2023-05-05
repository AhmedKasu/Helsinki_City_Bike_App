import { Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import styles from '../../utils/styles';

interface Props {
  name: string;
  placeholder: string;
}

const TextInput = ({ name, placeholder }: Props) => {
  const { register } = useFormContext();
  return (
    <Input
      {...register(name)}
      width={styles.input.maxWidth}
      placeholder={placeholder}
    />
  );
};

export default TextInput;

import { Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import AutoCompleteMenu from './AutoCompleteMenu';
import FormError from './FormError';

import styles from '../../utils/styles';
interface Props {
  name: string;
  placeholder: string;
  autoCompleteItems: string[] | [];
}

const TextInput = ({ name, placeholder, autoCompleteItems }: Props) => {
  const {
    setValue,
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message;
  return (
    <>
      <Input
        autoComplete='off'
        {...register(name)}
        width={styles.input.maxWidth}
        placeholder={placeholder}
      />
      {error && <FormError error={error as string} />}
      {autoCompleteItems?.length > 0 && (
        <AutoCompleteMenu
          menuItems={autoCompleteItems}
          onSelectIem={(item) => setValue(name, item)}
        />
      )}
    </>
  );
};

export default TextInput;

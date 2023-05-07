import {
  Input,
  CloseButton,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
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
    formState: { errors },
    setValue,
    register,
    resetField,
  } = useFormContext();

  const error = errors[name]?.message;
  return (
    <>
      <InputGroup w={styles.input.maxWidth}>
        <Input
          autoComplete='off'
          {...register(name)}
          placeholder={placeholder}
          w='full'
        />
        <InputRightElement
          children={<CloseButton onClick={() => resetField(name)} />}
        />
      </InputGroup>
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

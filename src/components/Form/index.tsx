import React from 'react';

import { Stack } from '@chakra-ui/react';
import { FieldValues, useFormContext } from 'react-hook-form';
interface Props {
  children: React.ReactNode;
  onSubmit: (variables: FieldValues) => void;
}

const Form = ({ children, onSubmit }: Props) => {
  const { handleSubmit } = useFormContext();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack pl={5} p={5} marginLeft={7}>
        {children}
      </Stack>
    </form>
  );
};

export default Form;

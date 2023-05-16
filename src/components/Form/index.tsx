import React from 'react';

import { Stack } from '@chakra-ui/react';
import { FieldValues, useFormContext } from 'react-hook-form';
interface Props {
  children: React.ReactNode;
  onSubmit: (variables: FieldValues) => Promise<void> | void;
}

const Form = ({ children, onSubmit }: Props) => {
  const { handleSubmit } = useFormContext();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack p={5}>{children}</Stack>
    </form>
  );
};

export default Form;

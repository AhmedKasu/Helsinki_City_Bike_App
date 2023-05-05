import React from 'react';

import { Stack } from '@chakra-ui/react';
import { FieldValues, useForm } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';

interface Props {
  children: React.ReactNode;
  onSubmit: (variables: FieldValues) => void;
}

const Form = ({ children, onSubmit }: Props) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack pl={5} p={5} marginLeft={7}>
          {children}
        </Stack>
      </form>
    </FormProvider>
  );
};

export default Form;

import { Center, Text } from '@chakra-ui/react';

const Info = ({ message }: { message: string }) => {
  return (
    <Center p={10}>
      <Text>{message}</Text>
    </Center>
  );
};

export default Info;

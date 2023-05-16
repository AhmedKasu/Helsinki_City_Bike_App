import { Center, Heading, Text, VStack } from '@chakra-ui/react';

const ErrorPage = () => {
  return (
    <Center>
      <VStack pt='15%' spacing={5}>
        <Heading as='h1' size='lg'>
          Oops!
        </Heading>
        <Text fontSize='xs'>Sorry, page not found.</Text>
      </VStack>
    </Center>
  );
};
export default ErrorPage;

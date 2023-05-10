import { ApolloError } from '@apollo/client';
import { Center, VStack, Text } from '@chakra-ui/react';
import styles from '../utils/styles';

interface Props {
  error: ApolloError | undefined;
}

const Error = ({ error }: Props) => {
  return (
    <Center p={20}>
      <VStack>
        <Text color={styles.text.color}>
          {error?.name ? 'Connection error !' : error?.name}
        </Text>
        <Text color={styles.text.color}>Please try reloading </Text>
      </VStack>
    </Center>
  );
};

export default Error;

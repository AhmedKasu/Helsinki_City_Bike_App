import { Button, HStack, Text } from '@chakra-ui/react';

interface Props {
  message: string;
  onReload: () => void;
}

const Reload = ({ message, onReload }: Props) => {
  return (
    <HStack>
      <Text>{message}</Text>
      <Button colorScheme='blue' size='sm' variant='solid' onClick={onReload}>
        reload
      </Button>
    </HStack>
  );
};

export default Reload;

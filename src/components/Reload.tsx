import { Button, HStack } from '@chakra-ui/react';

import Info from './Info';

interface Props {
  message: string;
  onReload: () => void;
}

const Reload = ({ message, onReload }: Props) => {
  return (
    <HStack>
      <Info message={message} />
      <Button colorScheme='blue' size='sm' variant='solid' onClick={onReload}>
        reload
      </Button>
    </HStack>
  );
};

export default Reload;

import { Button, Input, Stack } from '@chakra-ui/react';
import styles from '../utils/styles';

const SearchInput = () => {
  return (
    <Stack pl={5} p={5} marginLeft={7}>
      <Input
        width={styles.input.maxWidth}
        placeholder='Departure station name'
      />
      <Input width={styles.input.maxWidth} placeholder='Return station name' />
      <Button width={styles.input.maxWidth}>Search</Button>
    </Stack>
  );
};

export default SearchInput;

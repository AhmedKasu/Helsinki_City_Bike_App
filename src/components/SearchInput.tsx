import { Button, Input, Stack } from '@chakra-ui/react';
import styles from '../utils/styles';

const SearchInput = () => {
  return (
    <Stack pl={10}>
      <Input width={styles.input.width} placeholder='Departure station name' />
      <Input width={styles.input.width} placeholder='Return station name' />
      <Button width={styles.input.width}>Search</Button>
    </Stack>
  );
};

export default SearchInput;

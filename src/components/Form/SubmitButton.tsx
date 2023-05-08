import { Button } from '@chakra-ui/react';
import styles from '../../utils/styles';

interface Props {
  isDisabled?: boolean;
  label: string;
}

const SubmitButton = ({ isDisabled = false, label }: Props) => {
  return (
    <Button type='submit' w={styles.input.maxWidth} isDisabled={isDisabled}>
      {label}
    </Button>
  );
};

export default SubmitButton;

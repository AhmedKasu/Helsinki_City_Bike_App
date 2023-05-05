import { Button } from '@chakra-ui/react';
import styles from '../../utils/styles';

interface Props {
  label: string;
}

const SubmitButton = ({ label }: Props) => {
  return (
    <Button type='submit' width={styles.input.maxWidth}>
      {label}
    </Button>
  );
};

export default SubmitButton;

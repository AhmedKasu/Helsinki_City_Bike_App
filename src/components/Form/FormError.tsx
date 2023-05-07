import { Text } from '@chakra-ui/react';
import styles from '../../utils/styles';

const FormError = ({ error }: { error: string }) => {
  return <Text color={styles.text.color.error}>{error}</Text>;
};

export default FormError;

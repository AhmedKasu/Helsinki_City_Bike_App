import {
  Card,
  CardBody,
  Skeleton,
  HStack,
  SkeletonCircle,
  Stack,
} from '@chakra-ui/react';
import styles from '../../utils/styles';

const JourneySkeleton = () => {
  return (
    <Card height={170} p={5}>
      <HStack spacing={2}>
        <Stack direction={'column'}>
          <SkeletonCircle startColor={styles.icon.departure} size='2' />
          <Skeleton height={77} width={2} />
          <SkeletonCircle startColor={styles.icon.return} size='2' />
        </Stack>

        <CardBody>
          <Skeleton
            startColor='BlackAlpha.300'
            marginBottom={2}
            height={10}
            width='50%'
          />
          <Skeleton height={10} width='50%' />
        </CardBody>
      </HStack>
    </Card>
  );
};

export default JourneySkeleton;

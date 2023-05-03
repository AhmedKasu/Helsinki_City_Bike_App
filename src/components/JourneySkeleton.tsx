import { Card, CardBody, Skeleton, HStack } from '@chakra-ui/react';

const JourneySkeleton = () => {
  return (
    <Card p={5} height={180} width={400}>
      <HStack spacing={2}>
        <Skeleton height={100} width={2} />
        <CardBody>
          <Skeleton
            startColor='pink.500'
            endColor='orange.500'
            marginBottom={2}
            height={10}
            width={300}
          />
          <Skeleton height={10} width={300} />
        </CardBody>
      </HStack>
    </Card>
  );
};

export default JourneySkeleton;

import {
  Box,
  Card,
  CardBody,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';

import { IoLocationSharp, IoBicycle } from 'react-icons/io5';
import { BsDashLg, BsDash } from 'react-icons/bs';
import { CiClock2 } from 'react-icons/ci';

import { Journey as TypeJourney } from '../types';
import styles from '../utils/styles';
interface Props {
  journey: TypeJourney;
}

const Journey = ({ journey }: Props) => {
  const {
    coveredDistanceMeters,
    departure,
    departureStationName,
    durationSeconds,
    returnStationName,
  } = journey;

  return (
    <Card width={400}>
      <CardBody>
        <Stack direction={'row'} spacing='24px'>
          <Stack direction={'column'} spacing='10px'>
            <Box>
              <IoLocationSharp size={20} color='green' />
              <BsDashLg
                size={20}
                style={{ transform: 'rotate(90deg)', marginTop: '5px' }}
              />
            </Box>
            <IoBicycle size={20} style={{ marginTop: '10px' }} />
            <Box>
              <BsDash size={20} style={{ transform: 'rotate(90deg)' }} />
              <IoLocationSharp size={20} color='#d6204e' />
            </Box>
          </Stack>

          <Stack flex={1} direction={'column'}>
            <Heading
              color={styles.text.color.primary}
              fontSize={styles.text.fontSize.xSmall}>
              {departureStationName}
            </Heading>
            <Text
              color={styles.text.color.primary}
              fontSize={styles.text.fontSize.xSmall}>
              {departure?.replace(
                'GMT+0300 (Eastern European Summer Time)',
                ''
              )}
            </Text>
            <Divider />
            <HStack>
              <CiClock2 />
              <Text
                color={styles.text.color.primary}
                fontSize={styles.text.fontSize.xSmall}>
                {Math.round(durationSeconds / 60)} min (
                {(coveredDistanceMeters * 0.001).toFixed(1)} km)
              </Text>
            </HStack>
            <Divider />
            <Heading
              color={styles.text.color.primary}
              fontSize={styles.text.fontSize.xSmall}>
              {returnStationName}
            </Heading>
            <Text
              color={styles.text.color.primary}
              fontSize={styles.text.fontSize.xSmall}>
              {journey.return?.replace(
                'GMT+0300 (Eastern European Summer Time)',
                ''
              )}
            </Text>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Journey;

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

const Journey = () => {
  const j = {
    coveredDistanceMeters: 1602,
    departure:
      'Sat Jul 31 2021 23:59:59 GMT+0300 (Eastern European Summer Time)',
    departureStationId: 113,
    departureStationName: 'Pasilan asema',
    durationSeconds: 553,
    id: '644fea3435cc853a6b5bbcdd',
    return: 'Sun Aug 01 2021 00:09:15 GMT+0300 (Eastern European Summer Time)',
    returnStationId: 78,
    returnStationName: 'Messeniuksenkatu',
  };
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
              <IoLocationSharp size={20} color='red' />
            </Box>
          </Stack>

          <Stack flex={1} direction={'column'}>
            <Heading color='#808080' fontSize='xs'>
              {j.departureStationName}
            </Heading>
            <Text color='#808080' fontSize='xs'>
              {j.departure.replace(
                'GMT+0300 (Eastern European Summer Time)',
                ''
              )}
            </Text>
            <Divider />
            <HStack>
              <CiClock2 />
              <Text color='#808080' fontSize='xs'>
                {Math.round(j.durationSeconds / 60)} min (
                {(j.coveredDistanceMeters * 0.001).toFixed(1)} km)
              </Text>
            </HStack>
            <Divider />
            <Heading color='#808080' fontSize='xs'>
              {j.returnStationName}
            </Heading>
            <Text color='#808080' fontSize='xs'>
              {j.return.replace('GMT+0300 (Eastern European Summer Time)', '')}
            </Text>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Journey;

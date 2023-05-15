import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Spinner,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  UnorderedList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

import { metersToKm } from '../../utils/parsers';
import { GetStation } from '../../types';
import Info from '../Info';

const months = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 },
];

interface Props {
  loading: boolean;
  station: GetStation;
  selectedMonth: number;
  onSelectMonth: (month: number) => void;
}

const StationDetails = ({
  loading,
  station,
  selectedMonth,
  onSelectMonth,
}: Props) => {
  const currentMonth: { label: string; value: number } | undefined =
    months.find((m) => selectedMonth === m.value);

  if (loading)
    return <Spinner marginTop='50%' marginLeft='30%' color='red.500' />;

  if (!station && !loading) return <Info message='Station not found!' />;

  // most Helsinki stations are missing city data
  const city = station.kaupunki !== ' ' ? station.kaupunki : 'Helsinki';

  return (
    <Box w='full' p='2' pt='5'>
      <Heading as='h4' color='#319795' size='md'>
        {station.nimi}
      </Heading>
      <Stack spacing='4' pt={3}>
        <Box>
          <Stat>
            <StatLabel>Address</StatLabel>
            <StatHelpText>{station.osoite}</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>City</StatLabel>
            <StatHelpText>{city}</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Capacity</StatLabel>
            <StatHelpText>{station.kapasiteet}</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Journeys</StatLabel>
            <StatHelpText>
              {station.journeysStarting.count + station.journeysEnding.count}
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>location on the map</StatLabel>
            <StatHelpText>x: {station.x}</StatHelpText>
            <StatHelpText>y: {station.y}</StatHelpText>
          </Stat>
        </Box>

        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              variant='outline'>
              {currentMonth?.label}
            </MenuButton>
            <MenuList>
              {months.map((month) => (
                <MenuItem
                  key={month.label}
                  value={month.value}
                  onClick={() => onSelectMonth(month.value)}>
                  {month.label}{' '}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton pl={1}>
                <Box
                  fontSize='md'
                  textAlign='left'>{`Journeys starting at ${station.nimi}`}</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2} pl={1}>
              <Stat>
                <StatLabel>Count</StatLabel>
                <StatHelpText>{station.journeysStarting.count}</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Average distance</StatLabel>
                <StatHelpText>
                  {metersToKm(station.journeysStarting.averageDistanceMeters)}{' '}
                  km
                </StatHelpText>
              </Stat>

              {station.journeysStarting.count > 0 && (
                <Stat>
                  <StatLabel>Most popular return stations</StatLabel>
                  <UnorderedList>
                    {station.journeysStarting.mostPopular.map((m) => (
                      <ListItem
                        key={
                          m.returnStationName
                        }>{`${m.returnStationName} - ${m.journeys} journeys`}</ListItem>
                    ))}
                  </UnorderedList>
                </Stat>
              )}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton pl={1}>
                <Box
                  fontSize='md'
                  textAlign='left'>{`Journeys ending at ${station.nimi}`}</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} pl={1}>
              <Stat>
                <StatLabel>Count</StatLabel>
                <StatHelpText>{station.journeysEnding.count}</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Average distance</StatLabel>
                <StatHelpText>
                  {metersToKm(station.journeysEnding.averageDistanceMeters)} km
                </StatHelpText>
              </Stat>
              {station.journeysEnding.count > 0 && (
                <Stat>
                  <StatLabel>Most popular departure stations</StatLabel>
                  <UnorderedList>
                    {station.journeysEnding.mostPopular.map((m) => (
                      <ListItem
                        key={
                          m.departureStationName
                        }>{`${m.departureStationName} - ${m.journeys} journeys`}</ListItem>
                    ))}
                  </UnorderedList>
                </Stat>
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Box>
  );
};

export default StationDetails;

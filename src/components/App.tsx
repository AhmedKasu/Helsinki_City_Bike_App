import { useState } from 'react';
import { Grid, GridItem, Show, useColorMode } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';

import FilterJourneyForm from './FilterJourneyForm';
import Journeys from './Journeys';
import JourneysSorter from './JourneysSorter';
import SearchJourneyForm from './SearchJourneyForm';
import NavBar from './NavBar';
import Modal from './Modal';

import {
  FilterParserArgs,
  Journey,
  JourneysQuery,
  SearchVariables,
  SortOrders,
} from '../types';
import useJourneys from '../hooks/useJourneys';
import { parseFilter } from '../utils/parsers';
import styles from '../utils/styles';

function App() {
  const { colorMode } = useColorMode();
  const [journeysQuery, setJourneysQuery] = useState<JourneysQuery>({
    orderBy: {
      departureStationName: 'asc',
      returnStationName: 'asc',
      durationSeconds: 'asc',
      coveredDistanceMeters: 'asc',
    },
  });

  const { data, error, loading, refetch } = useJourneys(journeysQuery);
  const journeys: Journey[] = data ? data.allJourneys.journeys : [];

  const onSearchJourney = (variables: FieldValues) => {
    setJourneysQuery({ ...journeys, ...(variables as SearchVariables) });
  };

  const onFilterJourney = (variables: FieldValues) => {
    const parserdVariables = parseFilter(variables as FilterParserArgs);
    setJourneysQuery({ ...journeysQuery, ...parserdVariables });
  };

  const onSortJourney = (sortOrders: FieldValues) => {
    setJourneysQuery({
      ...journeysQuery,
      orderBy: { ...(sortOrders as SortOrders) },
    });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "mid" "main"`,
        md: `"nav nav" "side main"`,
        lg: `"nav nav" "side main"`,
      }}
      templateColumns={{
        base: '1fr',
        md: '33% 1fr',
        lg: '30% 1fr',
      }}
      templateRows={{
        base: '50px 50px 1fr',
        md: '100px 1fr',
        lg: '100px 1fr',
      }}>
      <GridItem
        area='nav'
        pl='2'
        pr='2'
        pos='fixed'
        top={0}
        width='100%'
        zIndex={10}>
        <NavBar />
      </GridItem>

      <Show above='768px'>
        <GridItem
          area='side'
          height='50%'
          pl='5'
          top={100}
          pos='fixed'
          width='33%'>
          <SearchJourneyForm onSubmit={onSearchJourney} />
          <JourneysSorter onSelectSortOrder={onSortJourney} />
          <FilterJourneyForm onSubmit={onFilterJourney} />
        </GridItem>
      </Show>

      <Show below='767px'>
        <GridItem
          area='mid'
          bg={colorMode === 'dark' ? styles.theme.darkSecondary : 'white'}
          height='5%'
          pos='fixed'
          top={50}
          w='100%'
          zIndex={9}>
          <Modal>
            <SearchJourneyForm onSubmit={onSearchJourney} />
            <JourneysSorter onSelectSortOrder={onSortJourney} />
            <FilterJourneyForm onSubmit={onFilterJourney} />
          </Modal>
        </GridItem>
      </Show>

      <GridItem p={5} area='main'>
        <Journeys
          error={error}
          journeys={journeys}
          loading={loading}
          refetch={refetch}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

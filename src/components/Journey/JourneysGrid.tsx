import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { Grid, GridItem, Show, useColorMode } from '@chakra-ui/react';

import Error from '../Error';
import FilterJourneyForm from './FilterJourneyForm';
import JourneysSorter from './JourneysSorter';
import Journeys from './Journeys';
import Modal from '../Modal';
import SearchJourneyForm from './SearchJourneyForm';

import {
  FilterParserArgs,
  JourneysQuery,
  SearchVariables,
  SortOrders,
} from '../../types';
import useJourneys from '../../hooks/useJourneys';
import styles from '../../utils/styles';
import { parseFilter } from '../../utils/parsers';

const JourneysGrid = () => {
  const { colorMode } = useColorMode();
  const [journeysQuery, setJourneysQuery] = useState<JourneysQuery>({
    orderBy: {
      departureStationName: 'asc',
      returnStationName: 'asc',
      durationSeconds: 'asc',
      coveredDistanceMeters: 'asc',
    },
  });

  const { journeys, error, fetchMore, loading, networkStatus } =
    useJourneys(journeysQuery);

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

  if (error) return <Error error={error} />;

  return (
    <Grid
      templateAreas={{
        base: `"mid" "main"`,
        md: `"side main"`,
        lg: `"side main"`,
      }}
      templateColumns={{
        base: '1fr',
        md: '33% 1fr',
        lg: '30% 1fr',
      }}
      templateRows={{
        base: '50px 1fr',
        md: 'fr',
        lg: '1fr',
      }}
      pt='5'>
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
          top={70}
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
          fetchMore={fetchMore}
          journeys={journeys}
          loading={loading}
          networkStatus={networkStatus}
        />
      </GridItem>
    </Grid>
  );
};

export default JourneysGrid;

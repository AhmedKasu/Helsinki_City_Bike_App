import { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';

import NavBar from './NavBar';
import JourneysGrid from './JourneysGrid';

import {
  FilterParserArgs,
  Journey,
  JourneysQuery,
  SearchVariables,
  SortOrders,
} from '../types';
import useJourneys from '../hooks/useJourneys';
import { parseFilter } from '../utils/parsers';

function App() {
  const [journeysQuery, setJourneysQuery] = useState<JourneysQuery>({
    orderBy: {
      departureStationName: 'asc',
      returnStationName: 'asc',
      durationSeconds: 'asc',
      coveredDistanceMeters: 'asc',
    },
  });

  const { data, error, fetchMore, loading, networkStatus, refetch } =
    useJourneys(journeysQuery);
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
        base: `"nav" "main"`,
        md: `"nav nav" "main"`,
        lg: `"nav nav" "main"`,
      }}
      templateColumns={{
        base: '1fr',
        md: '1fr',
        lg: '1fr',
      }}
      templateRows={{
        base: '50px 1fr',
        md: '100px 1fr',
        lg: '100px 1fr',
      }}>
      <GridItem area='nav' pos='fixed' top={0} w='100%' zIndex={10}>
        <NavBar />
      </GridItem>

      <GridItem area='main'>
        <JourneysGrid
          error={error}
          fetchMore={fetchMore}
          journeys={journeys}
          loading={loading}
          networkStatus={networkStatus}
          onFilterJourney={onFilterJourney}
          onSearchJourney={onSearchJourney}
          onSortJourney={onSortJourney}
          refetch={refetch}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

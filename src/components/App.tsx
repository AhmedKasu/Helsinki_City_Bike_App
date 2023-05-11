import { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Error from './Error';
import NavBar from './NavBar';
import JourneysGrid from './JourneysGrid';
import StationsGrid from './StationsGrid';

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

  const { data, error, fetchMore, loading, networkStatus } =
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

  if (error) return <Error error={error} />;
  return (
    <Router>
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
          md: '70px 1fr',
          lg: '70px 1fr',
        }}>
        <GridItem area='nav' pos='fixed' top={0} w='100%' zIndex={10}>
          <NavBar />
        </GridItem>

        <GridItem area='main'>
          <Routes>
            <Route
              path='/'
              element={
                <JourneysGrid
                  fetchMore={fetchMore}
                  journeys={journeys}
                  loading={loading}
                  networkStatus={networkStatus}
                  onFilterJourney={onFilterJourney}
                  onSearchJourney={onSearchJourney}
                  onSortJourney={onSortJourney}
                />
              }
            />
            <Route path='/stations' element={<StationsGrid />} />
          </Routes>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;

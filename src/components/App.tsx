import { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';

import NavBar from './NavBar';
import Journeys from './Journeys';
import SearchJourneyForm from './SearchJourneyForm';

import { Journey, JourneysQuery, SearchVariables } from '../types';
import useJourneys from '../hooks/useJourneys';

function App() {
  const [journeysQuery, setJourneysQuery] = useState<JourneysQuery>({
    departureStationName: '',
    returnStationName: '',
  });

  const { data, error, loading, refetch } = useJourneys(journeysQuery);

  const journeys: Journey[] = data ? data.allJourneys.journeys : [];

  const onSearchJourney = (variables: FieldValues) => {
    setJourneysQuery({ ...journeys, ...(variables as SearchVariables) });
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
        lg: '33% 1fr',
      }}
      templateRows={{
        base: '50px 150px 1fr',
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
        </GridItem>
      </Show>

      <Show below='767px'>
        <GridItem
          area='mid'
          height='50%'
          pos='fixed'
          top={50}
          width='100%'
          zIndex={5}>
          <SearchJourneyForm onSubmit={onSearchJourney} />
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

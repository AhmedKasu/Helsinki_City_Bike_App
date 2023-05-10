import { Grid, GridItem, Show, useColorMode } from '@chakra-ui/react';
import { NetworkStatus } from '@apollo/client';

import FilterJourneyForm from './FilterJourneyForm';
import JourneysSorter from './JourneysSorter';
import Journeys from './Journeys';
import Modal from './Modal';
import SearchJourneyForm from './SearchJourneyForm';

import styles from '../utils/styles';
import { Journey } from '../types';
import { FieldValues } from 'react-hook-form';
interface Args {
  fetchMore: () => void;
  journeys: Journey[] | [];
  loading: boolean;
  networkStatus: NetworkStatus;
  onSearchJourney: (variables: FieldValues) => void;
  onFilterJourney: (variables: FieldValues) => void;
  onSortJourney: (variables: FieldValues) => void;
}

const JourneysGrid = ({
  fetchMore,
  journeys,
  loading,
  networkStatus,
  onSearchJourney,
  onFilterJourney,
  onSortJourney,
}: Args) => {
  const { colorMode } = useColorMode();

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
      }}>
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

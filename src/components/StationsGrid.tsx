import { Grid, GridItem, Show } from '@chakra-ui/react';

import useStations from '../hooks/useStations';

import Stations from './Stations';

const StationsGrid = () => {
  const { stations } = useStations();

  return (
    <Grid
      templateAreas={{
        base: `"top top" "main side"`,
        md: `"top top" "main side"`,
        lg: `"main side extra"`,
      }}
      templateColumns={{
        base: '1fr 1fr',
        md: '30% 1fr',
        lg: '17% 30% 1fr',
      }}
      templateRows={{
        base: '200px 100vh',
        md: '200px 100vh',
        lg: '100vh',
      }}>
      <Show below='992px'>
        <GridItem p={5} area='top'></GridItem>
      </Show>

      <GridItem area='main' p={5} maxH='calc(100vh - 100px)' overflowY='scroll'>
        <Stations stations={stations} />
      </GridItem>

      <GridItem
        area='side'
        overflowY='scroll'
        maxH='calc(100vh - 100px)'></GridItem>

      <Show above='992px'>
        <GridItem area='extra'></GridItem>
      </Show>
    </Grid>
  );
};

export default StationsGrid;

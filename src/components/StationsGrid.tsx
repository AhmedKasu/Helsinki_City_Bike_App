import { Grid, GridItem } from '@chakra-ui/react';

import useStations from '../hooks/useStations';

import Stations from './Stations';

const StationsGrid = () => {
  const { stations } = useStations();

  return (
    <Grid
      templateAreas={{
        base: `"top" "main" "bottom"`,
        md: `"main side"`,
        lg: `"main side"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '20% 1fr',
        md: '20% 1fr',
      }}
      templateRows={{
        base: '200px 300px 1fr',
        md: '1fr',
        lg: '1fr ',
      }}>
      <GridItem area='top' bg='yellow'></GridItem>
      <GridItem area='bottom' bg='blue'></GridItem>
      <GridItem area='side' bg='green'></GridItem>

      <GridItem p={5} area='main'>
        <Stations stations={stations} />
      </GridItem>
    </Grid>
  );
};

export default StationsGrid;

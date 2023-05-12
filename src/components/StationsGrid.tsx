import { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';

import useStations from '../hooks/useStations';
import useStation from '../hooks/useStation';

import Stations from './Stations';
import StationDetails from './StationDetails';

const StationsGrid = () => {
  const [stationQuery, setStationQuery] = useState({
    nimi: 'Keilalahti',
    month: 7,
  });

  const { stations } = useStations();
  const { station, loading: stationLoading } = useStation(stationQuery);

  const handleStationSelect = (station: string) => {
    setStationQuery({ ...stationQuery, nimi: station });
  };

  const handleMonthSelect = (month: number) => {
    setStationQuery({ ...stationQuery, month });
  };

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
        <Stations stations={stations} onSelectStation={handleStationSelect} />
      </GridItem>

      <GridItem area='side' overflowY='scroll' maxH='calc(100vh - 100px)'>
        <StationDetails
          station={station[0]}
          loading={stationLoading}
          selectedMonth={stationQuery.month}
          onSelectMonth={handleMonthSelect}
        />
      </GridItem>

      <Show above='992px'>
        <GridItem area='extra'></GridItem>
      </Show>
    </Grid>
  );
};

export default StationsGrid;

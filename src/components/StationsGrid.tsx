import { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';

import useStations from '../hooks/useStations';
import useStation from '../hooks/useStation';

import Stations from './Stations';
import StationDetails from './StationDetails';
import SearchStationForm from './SearchStationForm';
import Map from './Map';
interface StationQuery {
  nimi: string;
  month: number;
}

const StationsGrid = () => {
  const [stationQuery, setStationQuery] = useState<StationQuery>({
    nimi: 'Keilalahti',
    month: 7,
  });

  const { fetchMore, networkStatus, stations } = useStations();
  const { station, loading: stationLoading } = useStation(stationQuery);

  const handleStationSelect = (station: string) => {
    setStationQuery({ ...stationQuery, nimi: station });
  };

  const handleMonthSelect = (month: number) => {
    setStationQuery({ ...stationQuery, month });
  };

  const handleStationSearch = (station: string) => {
    setStationQuery({ ...stationQuery, nimi: station });
  };

  const stationCoordinates = {
    lat: station[0]?.y,
    lng: station[0]?.x,
  };

  return (
    <Grid
      templateAreas={{
        base: `"baseSearch baseSearch" 
                "stations  details"`,
        md: `"search   search  map" 
            "stations  details map"`,
        lg: `"search   search  map" 
            "stations  details map"`,
      }}
      templateColumns={{
        base: '40% 1fr',
        md: '20% 30% 1fr',
        lg: '20% 30% 1fr',
      }}
      templateRows={{
        base: '100px 1fr',
        md: '80px 1fr',
        lg: '80px 1fr',
      }}>
      <GridItem
        area='stations'
        p={2}
        maxH='calc(100vh - 100px)'
        overflowY='scroll'>
        <Stations
          fetchMore={fetchMore}
          networkStatus={networkStatus}
          stations={stations}
          onSelectStation={handleStationSelect}
        />
      </GridItem>

      <GridItem area='details' overflowY='scroll' maxH='calc(100vh - 100px)'>
        <StationDetails
          station={station[0]}
          loading={stationLoading}
          selectedMonth={stationQuery.month}
          onSelectMonth={handleMonthSelect}
        />
      </GridItem>

      <Show below='768px'>
        <GridItem p={10} area='baseSearch'>
          <SearchStationForm onSearchStation={handleStationSearch} />
        </GridItem>
      </Show>

      <Show above='767px'>
        <GridItem area='search' p={2} pt={5} pos='relative'>
          <SearchStationForm onSearchStation={handleStationSearch} />
        </GridItem>
        <GridItem area='map'>
          <Map coordinates={stationCoordinates} />
        </GridItem>
      </Show>
    </Grid>
  );
};

export default StationsGrid;

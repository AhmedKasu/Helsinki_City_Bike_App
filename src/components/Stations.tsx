import React from 'react';
import { NetworkStatus } from '@apollo/client';

import { List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { Waypoint } from 'react-waypoint';
import { Station } from '../types';

interface Props {
  fetchMore: () => void;
  networkStatus: NetworkStatus;
  stations: Station[];
  onSelectStation: (station: string) => void;
}

const Stations = ({
  fetchMore,
  networkStatus,
  stations,
  onSelectStation,
}: Props) => {
  return (
    <List>
      <ListItem>
        {stations.map((station, i) => (
          <React.Fragment key={i}>
            <Text
              key={station.id}
              p='2'
              _hover={{ color: '#319795', cursor: 'pointer' }}
              onClick={() => onSelectStation(station.nimi)}>
              {station.nimi}
            </Text>
            {stations.length === i + 1 && (
              <Waypoint onEnter={() => fetchMore()} />
            )}
            {networkStatus === 3 && <Spinner color='red' />}
          </React.Fragment>
        ))}
      </ListItem>
    </List>
  );
};

export default Stations;

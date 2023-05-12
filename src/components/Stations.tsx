import { List, ListItem, Text } from '@chakra-ui/react';
import { Station } from '../types';

interface Stations {
  stations: Station[];
  onSelectStation: (station: string) => void;
}

const Stations = ({ stations, onSelectStation }: Stations) => {
  return (
    <List>
      <ListItem>
        {stations.map((station) => (
          <Text
            p='1'
            key={station.id}
            _hover={{ color: '#319795', cursor: 'pointer' }}
            onClick={() => onSelectStation(station.nimi)}>
            {station.nimi}
          </Text>
        ))}
      </ListItem>
    </List>
  );
};

export default Stations;

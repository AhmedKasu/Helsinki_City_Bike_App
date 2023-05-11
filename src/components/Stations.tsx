import { List, ListItem, Text } from '@chakra-ui/react';
import { Station } from '../types';

interface Stations {
  stations: Station[];
}

const Stations = ({ stations }: Stations) => {
  return (
    <List>
      <ListItem>
        {stations.map((station) => (
          <Text
            fontFamily={'revert'}
            p='1'
            key={station.id}
            _hover={{ color: '#319795', cursor: 'pointer' }}
            onClick={() => console.log(station.nimi)}>
            {station.nimi}
          </Text>
        ))}
      </ListItem>
    </List>
  );
};

export default Stations;

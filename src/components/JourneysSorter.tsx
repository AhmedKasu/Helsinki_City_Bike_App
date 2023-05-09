import { useRef } from 'react';
import {
  Box,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
} from '@chakra-ui/react';
import { SortOrders } from '../types';

interface Args {
  onSelectSortOrder: (sortOrder: SortOrders) => void;
}

const sortItems = [
  { label: 'Departure station', value: 'departureStationName' },
  { label: 'Return station', value: 'returnStationName' },
  { label: 'Duration', value: 'durationSeconds' },
  { label: 'Distance', value: 'coveredDistanceMeters' },
];

const JourneysSorter = ({ onSelectSortOrder }: Args) => {
  const selectedFieldsRef = useRef<string | string[]>();

  const handleSortOrder = (order: string | string[]) => {
    const sortOrder: SortOrders = {
      departureStationName: 'asc',
      returnStationName: 'asc',
      durationSeconds: 'asc',
      coveredDistanceMeters: 'asc',
    };

    const selectedFields = selectedFieldsRef.current;

    if (selectedFields === undefined && order === 'desc') {
      Object.keys(sortOrder).forEach((key) => {
        sortOrder[key as keyof SortOrders] = 'desc';
      });
    }

    if (selectedFields && selectedFields.length > 0 && order === 'desc') {
      Object.keys(sortOrder).forEach((key) => {
        if (selectedFields.includes(key))
          sortOrder[key as keyof SortOrders] = 'desc';
      });
    }

    return sortOrder;
  };

  return (
    <Box marginLeft={5} width='70%'>
      <Menu closeOnSelect={false} isLazy>
        {({ isOpen, onClose }) => (
          <>
            <MenuButton as={Button} colorScheme='gray' isActive={isOpen}>
              {isOpen ? 'Close' : 'Sort'}
            </MenuButton>

            <MenuList width='235px'>
              <MenuOptionGroup
                title='Order by'
                type='radio'
                onChange={(e) => onSelectSortOrder(handleSortOrder(e))}>
                <MenuItemOption
                  closeOnSelect={false}
                  onClick={() => {
                    setTimeout(onClose, 200);
                  }}
                  value='asc'>
                  Ascending
                </MenuItemOption>

                <MenuItemOption
                  closeOnSelect={false}
                  value='desc'
                  onClick={() => {
                    setTimeout(onClose, 200);
                  }}>
                  Descending
                </MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup
                title='Fields'
                type='checkbox'
                onChange={(e) => (selectedFieldsRef.current = e)}>
                {sortItems.map((item) => (
                  <MenuItemOption value={item.value} key={item.value}>
                    {item.label}
                  </MenuItemOption>
                ))}
              </MenuOptionGroup>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
};

export default JourneysSorter;

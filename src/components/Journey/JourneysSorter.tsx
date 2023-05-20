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
import { SortOrder, SortOrders } from '../../types';

interface Props {
  onSelectSortOrder: (sortOrder: SortOrders) => void;
}

const sortItems = [
  { label: 'Departure station', value: 'departureStationName' },
  { label: 'Return station', value: 'returnStationName' },
  { label: 'Duration', value: 'durationSeconds' },
  { label: 'Distance', value: 'coveredDistanceMeters' },
];

const JourneysSorter = ({ onSelectSortOrder }: Props) => {
  const selectedFieldsRef = useRef<string | string[]>();

  const handleSortOrder = (order: string | string[]) => {
    const selectedFields = selectedFieldsRef.current;

    const sortOrders: SortOrders = {};
    if (Array.isArray(selectedFields) && selectedFields.length > 0) {
      selectedFields.forEach((field) => {
        sortOrders[field as keyof SortOrders] = order as SortOrder;
      });
    }

    return sortOrders;
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

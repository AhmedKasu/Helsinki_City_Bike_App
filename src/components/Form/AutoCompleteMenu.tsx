import { Box, List, ListItem, useColorMode } from '@chakra-ui/react';
import styles from '../../utils/styles';

interface Props {
  menuItems: string[];
  onSelectIem: (item: string) => void;
}

const AutoCompleteMenu = ({ menuItems, onSelectIem }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <List
        borderWidth='2px'
        borderRadius='xl'
        boxShadow='xl'
        p='1'
        rounded='md'
        w={'70%'}
        pos='absolute'
        spacing={1}
        bg={colorMode === 'dark' ? 'gray.700' : 'white'}
        zIndex={9}>
        {menuItems.map((item) => (
          <ListItem
            _hover={{
              backgroundColor: colorMode === 'dark' ? '#22303c' : '#EDF2F7',
            }}
            key={item}
            fontSize='sm'
            onClick={() => onSelectIem(item)}>
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AutoCompleteMenu;

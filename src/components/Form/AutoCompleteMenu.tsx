import { Box, List, ListItem } from '@chakra-ui/react';

interface Props {
  menuItems: string[];
  onSelectIem: (item: string) => void;
}

const AutoCompleteMenu = ({ menuItems, onSelectIem }: Props) => {
  return (
    <Box>
      <List
        borderWidth='2px'
        borderRadius='xl'
        boxShadow='xl'
        p='1'
        rounded='md'
        w={'65.5%'}
        pos='absolute'
        spacing={1}
        bg='white'
        zIndex={9}>
        {menuItems.map((item) => (
          <ListItem
            _hover={{ backgroundColor: '#EDF2F7' }}
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

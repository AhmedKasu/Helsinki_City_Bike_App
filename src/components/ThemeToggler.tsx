import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ThemeToggler = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack p={2}>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text>Dark mode</Text>
    </HStack>
  );
};

export default ThemeToggler;

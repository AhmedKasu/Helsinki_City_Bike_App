import { HStack, Switch, useColorMode } from '@chakra-ui/react';

const ThemeToggler = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack pr={5}>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    </HStack>
  );
};

export default ThemeToggler;

import { HStack, Image, Text, useColorMode } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ThemeToggler from './ThemeToggler';

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack
      bg={colorMode === 'dark' ? '#22303c' : 'whiteSmoke'}
      boxShadow='2xl'
      h='70px'
      justifyContent='space-between'
      rounded='sm'>
      <HStack>
        <Image src={logo} boxSize='60px' />
        <Text fontStyle={'italic'} fontWeight={'bold'} textColor={'#2980B9'}>
          HCB
        </Text>
      </HStack>
      <ThemeToggler />
    </HStack>
  );
};

export default NavBar;

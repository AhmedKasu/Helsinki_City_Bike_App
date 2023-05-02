import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ThemeToggler from './ThemeToggler';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between'>
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

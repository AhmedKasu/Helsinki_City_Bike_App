import { HStack, Text, Image, useColorMode } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';
import ThemeToggler from './ThemeToggler';

import styles from '../utils/styles';

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
        <Text style={styles.logo}>HCB</Text>
      </HStack>

      <HStack spacing={24} w='33%'>
        <NavLink style={({ isActive }) => styles.navLink(isActive)} to='/'>
          Journeys
        </NavLink>
        <NavLink
          style={({ isActive }) => styles.navLink(isActive)}
          to='/stations'>
          Stations
        </NavLink>
      </HStack>
      <ThemeToggler />
    </HStack>
  );
};

export default NavBar;

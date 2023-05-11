import { HStack, Text, Image, useColorMode, Show } from '@chakra-ui/react';
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
        <Image src={logo} boxSize='70px' />
        <Show above='768px'>
          <Text style={styles.logo}>HCB</Text>
        </Show>
      </HStack>

      <HStack spacing={'20%'} w='40%'>
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

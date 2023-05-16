import {
  HStack,
  Text,
  Image,
  useColorMode,
  Show,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
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

      <Show above='480px'>
        <HStack
          spacing={{ sm: '10%', md: '10%', lg: '15%' }}
          w={{ sm: '70%', md: '40%', lg: '40%' }}>
          <NavLink style={({ isActive }) => styles.navLink(isActive)} to='/'>
            Journeys
          </NavLink>
          <NavLink
            style={({ isActive }) => styles.navLink(isActive)}
            to='/stations'>
            Stations
          </NavLink>
          <NavLink
            style={({ isActive }) => styles.navLink(isActive)}
            to='/addJourney'>
            Add Journey
          </NavLink>
        </HStack>
      </Show>

      <Show below='480px'>
        <Box p={5}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<GiHamburgerMenu />}
              variant='outline'
            />
            <MenuList>
              <MenuItem>
                <NavLink
                  style={({ isActive }) => styles.navLink(isActive)}
                  to='/'>
                  Journeys
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  style={({ isActive }) => styles.navLink(isActive)}
                  to='/stations'>
                  Stations
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  style={({ isActive }) => styles.navLink(isActive)}
                  to='/addJourney'>
                  Add Journey
                </NavLink>
              </MenuItem>
              <MenuItem>
                <ThemeToggler />
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Show>

      <Show above='480px'>
        <ThemeToggler />
      </Show>
    </HStack>
  );
};

export default NavBar;

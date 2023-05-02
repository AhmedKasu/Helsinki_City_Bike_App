import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize='60px' />
      <Text fontStyle={'italic'} fontWeight={'bold'} textColor={'#2980B9'}>
        HCB
      </Text>
    </HStack>
  );
};

export default NavBar;

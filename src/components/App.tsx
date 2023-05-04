import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './NavBar';
import Journeys from './Journeys';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '33% 1fr',
      }}>
      <GridItem pl='2' pr='2' area='nav' pos='sticky' top={0} zIndex={10}>
        <NavBar />
      </GridItem>

      <Show above='lg'>
        <GridItem
          bg={'green'}
          pl='5'
          area='side'
          top={100}
          pos='fixed'
          height='50%'
          width='33%'></GridItem>
      </Show>

      <GridItem p={5} area='main'>
        <Journeys />
      </GridItem>
    </Grid>
  );
}

export default App;

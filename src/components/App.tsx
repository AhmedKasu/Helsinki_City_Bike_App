import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './NavBar';
import Journeys from './Journeys';
import SearchInput from './SearchInput';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "mid" "main"`,
        md: `"nav nav" "side main"`,
        lg: `"nav nav" "side main"`,
      }}
      templateColumns={{
        base: '1fr',
        md: '33% 1fr',
        lg: '33% 1fr',
      }}
      templateRows={{
        base: '50px 150px 1fr',
        md: '100px 1fr',
        lg: '100px 1fr',
      }}>
      <GridItem
        area='nav'
        pl='2'
        pr='2'
        pos='fixed'
        top={0}
        width='100%'
        zIndex={10}>
        <NavBar />
      </GridItem>

      <Show above='768px'>
        <GridItem
          area='side'
          height='50%'
          pl='5'
          top={100}
          pos='fixed'
          width='33%'>
          <SearchInput />
        </GridItem>
      </Show>

      <Show below='767px'>
        <GridItem
          area='mid'
          height='50%'
          pos='fixed'
          top={50}
          width='100%'
          zIndex={5}>
          <SearchInput />
        </GridItem>
      </Show>

      <GridItem p={5} area='main'>
        <Journeys />
      </GridItem>
    </Grid>
  );
}

export default App;

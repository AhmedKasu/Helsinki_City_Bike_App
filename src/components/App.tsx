import { Grid, GridItem, Center } from '@chakra-ui/react';
import NavBar from './NavBar';
import Journeys from './Journeys';

function App() {
  return (
    <Grid
      templateAreas={`"header"
                       "main"
                      "footer"`}>
      <GridItem pl='2' pr='2' area={'header'}>
        <NavBar />
      </GridItem>
      <Center p='10'>
        <GridItem area={'main'}>
          <Journeys />
        </GridItem>
      </Center>
      <GridItem pl='2' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;

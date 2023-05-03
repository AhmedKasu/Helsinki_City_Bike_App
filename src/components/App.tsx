import { Grid, GridItem } from '@chakra-ui/react';
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
      <GridItem p='2' area={'main'}>
        <Journeys />
      </GridItem>
      <GridItem pl='2' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;

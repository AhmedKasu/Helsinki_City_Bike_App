import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './NavBar';

function App() {
  return (
    <Grid
      templateAreas={`"header"
                       "main"
                      "footer"`}>
      <GridItem pl='2' area={'header'}>
        <NavBar />
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        Main
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;

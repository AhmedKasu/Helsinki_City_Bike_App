import { Grid, GridItem } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={`"header"
                       "main"
                      "footer"`}>
      <GridItem pl='2' bg='orange.300' area={'header'}>
        Header
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

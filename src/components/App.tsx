import { Grid, GridItem } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddJourneyForm from './Journey/AddJourneyForm';
import ErrorPage from './ErrorPage';
import JourneysGrid from './Journey/JourneysGrid';
import NavBar from './NavBar';
import StationsGrid from './Station/StationsGrid';

function App() {
  return (
    <Router>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "main"`,
          lg: `"nav nav" "main"`,
        }}
        templateColumns={{
          base: '1fr',
          md: '1fr',
          lg: '1fr',
        }}
        templateRows={{
          base: '50px 1fr',
          md: '70px 1fr',
          lg: '70px 1fr',
        }}>
        <GridItem area='nav' pos='fixed' top={0} w='100%' zIndex={10}>
          <NavBar />
        </GridItem>

        <GridItem area='main'>
          <Routes>
            <Route path='*' element={<ErrorPage />} />
            <Route path='/' element={<JourneysGrid />} />
            <Route path='/stations' element={<StationsGrid />} />
            <Route path='/addJourney' element={<AddJourneyForm />} />
          </Routes>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;

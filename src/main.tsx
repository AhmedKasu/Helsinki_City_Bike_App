import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import App from './components/App.tsx';
import createApolloClient from './services/apolloClient.ts';
import theme from './theme.ts';

const apolloClient = createApolloClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);

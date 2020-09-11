import {ApolloProvider} from '@apollo/react-components';
import React from 'react';
import ReactDOM from 'react-dom';
import Client from './apollo/client';
import App from './components/App';

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

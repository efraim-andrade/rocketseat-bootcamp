import React from 'react';
import { Router } from 'react-router-dom';

import Routes from '~/routes';
import history from '~/services/history';

import '~/config/Reactotron';
import GlobalStyle from '~/theme/global';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />

      <Routes />
    </Router>
  );
}

export default App;
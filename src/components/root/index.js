import React, { Fragment } from 'react';
import { Provider as StateManager } from 'react-redux';
import { PersistGate as StatePersistence } from 'redux-persist/integration/react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider as Theming } from 'styled-components';

import store, { persistor } from 'store';
import theme from 'theme';
import { App, Style } from 'components';

const Root = () => (
  <StateManager store={store}>
    <StatePersistence persistor={persistor} loading="Loading...">
      <Router>
        <Theming theme={theme}>
          <Fragment>
            <Style />
            <App />
          </Fragment>
        </Theming>
      </Router>
    </StatePersistence>
  </StateManager>
);

export default Root;

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ThemeProvider} from 'styled-components/macro';
import Main from '../../routes/Main';
import GlobalStyles from '../../styles/globalStyles';
import theme from '../../styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>
      </Router>
      <ToastContainer position='bottom-center' />
    </ThemeProvider>
  );
};

export default App;

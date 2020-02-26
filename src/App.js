import React from 'react';

import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import PageHeader from './components/pageHeader';
import Copyright from './components/copyright';

import FrontPage from './pages/front';
import CreateLabReportPage from './pages/createLabReport';
import RoadmapPage from './pages/roadmap';

const useStyles = makeStyles(theme => ({
  appContainer: {
    display: 'flex', 
    minHeight: '100vh', 
    flexDirection: 'column'
  }
}));

function App(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>

        <Box className={classes.appContainer}>

          <PageHeader />

          <Switch>
            <Route path="/labs">
              <CreateLabReportPage />
            </Route>
            <Route path="/roadmap">
              <RoadmapPage />
            </Route>
            <Route path="/">
              <FrontPage />
            </Route>
          </Switch>

          <Copyright />

        </Box>
        
      </Router>
    </ThemeProvider>
  );
}

export default App;

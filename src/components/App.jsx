import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../aws-exports';

import Home from './pages/home/Home';
import Alerts from './pages/alerts/Alerts';
import BlueprintAndDevices from './pages/blueprints-and-devices/BlueprintsAndDevices';
import Settings from './pages/settings/Settings';
import Chart from './pages/chart/Chart';

import '../styles/App.css';

Amplify.configure(awsconfig);

const defaultTheme = createMuiTheme({
   palette: {
      primary: {
         main: '#3E6EB0'
      },
      secondary: {
         main: '#65272C'
      },
   },
   typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif',
      ].join(','),
      fontWeightRegular: 400,
      fontWeightBold: 700,
    },
})

function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
   <Router>
   <Switch>

      <Route exact path="/">
         <Home />
      </Route>

      <Route exact path="/alerts">
         <Alerts />
      </Route>

      <Route exact path="/blueprints-and-devices">
         <BlueprintAndDevices />
      </Route>

      <Route exact path="/settings">
         <Settings />
      </Route>

      <Route exact path="/chart">
         <Chart />
      </Route>

   </Switch>
   </Router>
   </ThemeProvider>
  );
}

export default App;

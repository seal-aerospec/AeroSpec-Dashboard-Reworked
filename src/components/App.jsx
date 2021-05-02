import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import Home from './pages/home/Home';
import DeviceDetails from './pages/device-details/DeviceDetails';
import Alerts from './pages/alerts/Alerts';
import BlueprintAndDevices from './pages/blueprints-and-devices/BlueprintsAndDevices';
import Settings from './pages/settings/Settings';

import Themes from '../styles/Themes';
import '../styles/App.css';

function App() {
  return (
   <ThemeProvider theme={Themes}>
   <Router>
   <Switch>

      <Route exact path="/">
         <Home />
      </Route>

      <Route path="/home/:category/:time?">
         <Home />
      </Route>

      <Route path="/device-details/:deviceId/:category/:time?">
         <DeviceDetails />
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

   </Switch>
   </Router>
   </ThemeProvider>
  );
}

export default App;

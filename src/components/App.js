import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import Home from './pages/home/Home';

import '../styles/App.css';

function App() {
  return (
   <Router>
   <Switch>

      <Route exact path="/">
         <Home />
      </Route>
      
      
      <Route exact path="/alerts">

      </Route>
      
      <Route exact path="/blueprints-and-devices">

      </Route>

      <Route exact path="/settings">

      </Route>

   </Switch>
</Router>
  );
}

export default App;

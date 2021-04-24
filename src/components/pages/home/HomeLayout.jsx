import MainContent from './MainContent';
import CategoryButtons from './category-btns/CategoryButtons';
import DeviceDetailContent from './DeviceDetailsContent';
import { Switch, Route, useRouteMatch } from "react-router-dom";


import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
   homeContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '3vh 5vh 3vh 5vh',
   }
}));

const HomeLayout = () => {
   const classes = useStyles();
   let { path } = useRouteMatch();
   const truePath = (path === '/') ? '/home' : path;
   return (
      <Box className={classes.homeContainer}>
         <CategoryButtons />
         <Switch>
            <Route exact path={["/",truePath]}>
               <MainContent default/>
            </Route>
            <Route path={`${truePath}/main/:cateId`}>
               <MainContent />
            </Route>
            <Route path={`${truePath}/device-details/:deviceId`}>
               <DeviceDetailContent />
            </Route>
         </Switch>
      </Box>
   );
}

export default HomeLayout;

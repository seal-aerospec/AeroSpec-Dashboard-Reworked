import { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import NavBar from '../global/navbar/NavBar';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
   gridItem: {
      height: '100vh',
      
   },
   nav: {
      width: "16.5vw",
      height: '100vh',
      position: 'fixed',
   }
})

const MainLayout = (props) => {
   const classes = useStyles()

   return ( 
      <Grid container>
         <Grid xs={2} item className={classes.gridItem}>
            <NavBar />
         </Grid>

         <Grid xs={10} item className={classes.gridItem}>
            {props.content}
         </Grid>
      </Grid>
    );
}
 
export default MainLayout;
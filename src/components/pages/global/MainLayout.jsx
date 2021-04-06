import { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import NavBar from '../global/navbar/NavBar';
import TopBar from '../global/topbar/TopBar';

import clsx from 'clsx';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
   layoutContainer: {
      backgroundColor: '#f8fcff',
   },
   componentContainer: {
      height: '200vh',
      width: '100vw',
      position: "relative"
   },
   componentContainerShift: {
      height: '200vh',
      width: '84.5vw',
      marginLeft: '0.5vw',
      position: "relative"
   },
   navBar: {
      height: '100vh',
      width: '15vw',
      top: '0',
      margin: '0',
      position: 'fixed',
   },
   navContainer: {
      width: '15vw',
   },
})

const MainLayout = (props) => {
   const [menuOpen, setMenuOpen] = useState(true);
   const classes = useStyles();

   return (
      // <Grid container direction="column">
      //    <Grid item container className={classes.componentContainer}>
      //       <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      //    </Grid>
      //    <Grid item container>
      //       <Grid item md={2}>
      //          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      //       </Grid>
      //       <Grid item md={10}>
      //          {props.content}
      //       </Grid>
      //    </Grid>
      // </Grid>

      <Box display="flex" className={classes.layoutContainer}>

         <Box component="span" display={menuOpen ? 'block' : 'none'} className={classes.navContainer}>
            <Box className={classes.navBar}>
               <NavBar
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
               />
            </Box>
         </Box>

         <Box component="span"
            className={clsx(classes.componentContainer, {
               [classes.componentContainerShift]: menuOpen,
            })}
         >
            <Box component="span" className={classes.topBar}>
               <TopBar
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
               />
            </Box>
            <Box component="span">
               {props.content}
            </Box>
         </Box>
      </Box>
    );
}

export default MainLayout;

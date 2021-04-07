import { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import NavBar from '../global/navbar/NavBar';
import TopBar from '../global/topbar/TopBar';

import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import navbarLogo from '../../../assets/UI_component/AeroSpec PNG-7@2x.png';

const useStyles = makeStyles((theme) => ({
   layoutContainer: {
      backgroundColor: '#f8fcff',
   },
   componentContainer: {
      height: '200vh',
      width: '84.5vw',
      marginLeft: '0.5vw',
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
   drawerHeader: {
      height: '7vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(1, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      backgroundColor: 'white',
    },
    drawerHeaderImg: {
      display: 'block',
      maxWidth: '70%',
      maxHeight: 'auto',
    },
}))

const MainLayout = (props) => {
   const [menuOpen, setMenuOpen] = useState(true);
   const classes = useStyles();

   return (
      <Box display="flex" className={classes.layoutContainer}>

         <Box component="span" className={classes.navContainer}>
            <Box className={classes.drawerHeader}>
               <img src={navbarLogo} alt="AeroSpec Logo" className={classes.drawerHeaderImg} />
            </Box>
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

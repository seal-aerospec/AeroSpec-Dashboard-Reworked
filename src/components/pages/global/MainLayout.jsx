import { useState } from 'react';
import { makeStyles } from '@material-ui/core';

import NavBar from '../global/navbar/NavBar';
import TopBar from '../global/topbar/TopBar';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
   componentContainer: {
      height: '200vh',
      width: '85vw'
   },
   navBar: {
      height: '100vh',
      width: '15vw',
      top: '0',
      margin: '0',
      position: 'fixed'
   },
   navContainer: {
      width: '15vw'
   }
})

const MainLayout = (props) => {
   const [menuOpen, setMenuOpen] = useState(true);
   const classes = useStyles();

   return (
      <Box display="flex">

         <Box component="span" className={classes.navContainer}>
            <Box className={classes.navBar}>
               <NavBar
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
               />
            </Box>
         </Box>

         <Box component="span" className={classes.componentContainer}>
            <TopBar
               menuOpen={menuOpen}
               setMenuOpen={setMenuOpen}
            />
            {props.content}
         </Box>
      </Box>
    );
}

export default MainLayout;

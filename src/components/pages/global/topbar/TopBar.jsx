import { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

import MenuIcon from '../../../../assets/UI_component_svg/MenuIcon';
import NotificationIcon from '../../../../assets/UI_component_svg/NotificationIcon';

import SuggestionButton from '../SuggestionButton';

const useStyles = makeStyles((theme) => ({
   appBar: {
      backgroundColor: 'white',
      position: 'relative',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    },
}))

const TopBar = (props) => {
   const [modalOpen, setModalOpen] = useState(false);
   const classes = useStyles();

   return (
      <AppBar
         elevation={3}
         className={classes.appBar}
      >
         <Toolbar className={classes.toolbar}>
            <div>
               <IconButton
                  edge="start"
                  color="relative"
                  aria-label="menu"
                  onClick={props.menuOpen ?
                     () => props.setMenuOpen(false) : () => props.setMenuOpen(true)}
               >
                  <MenuIcon />
               </IconButton>

               <IconButton
                  edge="start"
                  href="alerts"
               >
                  <NotificationIcon />
               </IconButton>
            </div>

            <div>
               <SuggestionButton
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
               />
            </div>
         </Toolbar>
      </AppBar>
   );
}

export default TopBar;
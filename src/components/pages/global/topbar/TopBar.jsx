import { Link } from 'react-router-dom';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

import NotificationIcon from '../../../../assets/UI_component_svg/NotificationIcon';
import SuggestionButton from '../SuggestionButton';

const useStyles = makeStyles((theme) => ({
   appBar: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'white',
      position: 'relative',
      height: '8vh',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    },
}))

const TopBar = () => {
   const [modalOpen, setModalOpen] = useState(false);
   const classes = useStyles();

   return (
      <AppBar
         elevation={2}
         className={classes.appBar}
      >
         <Toolbar className={classes.toolbar}>
            <div>
               <IconButton
                  component={Link}
                  to={"/alerts"}
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
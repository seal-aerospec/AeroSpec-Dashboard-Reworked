import NavChoices from './NavChoices';

import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import AlertIcon from '../../../../assets/UI_component_svg/Alert2Icon';
import BlueprintDeviceIcon from '../../../../assets/UI_component_svg/BlueprintsDevicesIcon';
import HomeIcon from '../../../../assets/UI_component_svg/HomeIcon';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '../../../../assets/UI_component_svg/MenuIcon';
import navbarLogo from '../../../../assets/UI_component/AeroSpec PNG-7@2x.png';
import SettingsIcon from '../../../../assets/UI_component_svg/SettingsIcon';

const useStyles = makeStyles((theme) => ({
    drawer: {
      width: '15%',
      flexShrink: 1,
    },
    drawerPaper: {
      backgroundColor: '#3E6EB0',
      width: '15%',
    },
    drawerHeader: {
      height: '7%',
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

const NavBar = (props) => {
   const classes = useStyles();
   return (
      <Drawer
         className={classes.drawer}
         variant="persistent"
         anchor="left"
         open={props.menuOpen}
         classes={{ paper: classes.drawerPaper }}
      >
         <Box className={classes.drawerHeader}>
            <img src={navbarLogo} alt="AeroSpec Logo" className={classes.drawerHeaderImg} />
         </Box>
         <List>
            <NavChoices
               icon={<HomeIcon />}
               label="Home"
               link="/"
            />
            <NavChoices
               icon={<AlertIcon />}
               label="Alerts"
               link="/alerts"
            />
            <NavChoices
               icon={<BlueprintDeviceIcon />}
               label="Blueprints & Devices"
               link="/blueprints-and-devices"
            />
            <NavChoices
               icon={<SettingsIcon />}
               label="Settings"
               link="/settings"
            />
         </List>
      </Drawer>
   );
}

export default NavBar;
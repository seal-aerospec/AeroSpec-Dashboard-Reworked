import { makeStyles } from '@material-ui/core';

import navbarLogo from '../../../../assets/UI_component/AeroSpec PNG-7@2x.png';

const useStyles = makeStyles((theme) => ({
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
}));

const NavHeader = () => {
  const classes = useStyles();
  return (
    <img src={navbarLogo} alt="AeroSpec Logo" className={classes.drawerHeaderImg} />
  );
}

export default NavHeader;
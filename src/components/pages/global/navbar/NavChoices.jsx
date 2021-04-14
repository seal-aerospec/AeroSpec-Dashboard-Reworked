import { makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   drawerText: {
      color: 'white',
   },
}));

const NavChoices = (props) => {
   const classes = useStyles();
   return (
      <ListItem button key={props.label} component={Link} to={props.link}>
         <ListItemIcon>
            {props.icon}
         </ListItemIcon>
         <ListItemText primary={props.label} className={classes.drawerText} />
      </ListItem>
   );
}

export default NavChoices;
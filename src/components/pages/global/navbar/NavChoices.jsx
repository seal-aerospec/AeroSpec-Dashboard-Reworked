import { makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   item: {
      color: 'rgba(255, 255, 255, 0.5)',
      "&.Mui-selected": {
         color: 'rgba(255, 255, 255, 1)',
         backgroundColor: '#3E6EB0',
      },
   },
}));

const NavChoices = (props) => {
   const classes = useStyles();
   return (
      <ListItem
         button
         key={props.label}
         component={Link}
         to={props.link}
         selected={props.selectedChoice === props.choice}
         onClick={() => props.handleListItemClick(props.choice)}
         className={classes.item}
      >
         <ListItemIcon>
            {props.icon}
         </ListItemIcon>
         <ListItemText primary={props.label} />
      </ListItem>
   );
}

export default NavChoices;
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';

const useStyles = makeStyles({
   topBar: {
      height: '7vh',
      marginLeft: '1vw',
      boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)'
   }
})

const TopBar = (props) => {
   const classes = useStyles();
   return ( 
      <Box className={classes.topBar}>
         <Button onClick={props.menuClick}>
            <MenuIcon fontSize="large" />
         </Button>
         
         <Button onClick={props.alertClick}>
            <NotificationsNoneIcon fontSize="large" />
         </Button>
         
         <Button onClick={props.suggestionsClick} startIcon={<EmojiObjectsOutlinedIcon fontSize="large" />}>
            <Typography>
               Suggestions
            </Typography>
         </Button>
         

      </Box>
    );
}
 
export default TopBar;
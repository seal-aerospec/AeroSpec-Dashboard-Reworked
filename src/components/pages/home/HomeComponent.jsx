import MainContent from './MainContent';
import CategoryButtons from '../global/category-btns/CategoryButtons';


import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
   homeContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '3vh 5vh 3vh 5vh',
   }
}));

const HomeComponent = (props) => {
   const classes = useStyles();
   return (
      <Box className={classes.homeContainer}>
         <CategoryButtons parentLink='/home'/>
         <p>{props.category} Floor Plan</p>
         <p>Time: {props.time}</p>
         <MainContent />
      </Box>
   );
}

export default HomeComponent;

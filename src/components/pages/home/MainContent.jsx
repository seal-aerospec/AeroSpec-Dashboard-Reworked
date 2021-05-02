import { makeStyles, Box, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

import TimeSlider from './TimeSlider';

import ExampleBlueprint from '../../../assets/uploaded_blueprints/example.jpg';
import DeviceIcon from '../../../assets/UI_component/source 2.png';


const floorPlanImg = new Image();
floorPlanImg.src = ExampleBlueprint;

const useStyles = makeStyles((theme) => ({
   mainContentContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '2vh',
   },
   floorPlanCanvas: {
     backgroundImage: `url(${ExampleBlueprint})`,
     backgroundSize: 'contain',
     height: '70vh',
     width: '70vh'
   },
   points: {
    width: '3px',
    height: '3px',
    backgroundImage: `url(${DeviceIcon})`,
    backgroundSize: 'contain'
   }
}));

const MainContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContentContainer}>
        <TimeSlider className={classes.TimeSlider}/>
        <Box className={classes.floorPlanCanvas}>
        <IconButton
        className={classes.points}
        component={Link}
        to={`/device-details/1/co2`}>
        </IconButton>
        </Box>
    </Box>
  );
}
export default MainContent;
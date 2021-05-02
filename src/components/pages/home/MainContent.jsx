import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TimeSlider from './TimeSlider';

import ExampleBlueprint from '../../../assets/uploaded_blueprints/example.jpg';
import Points from './Points';

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
   FloorPlanCanvas: {
     backgroundImage: `url(${ExampleBlueprint})`,
     backgroundSize: 'contain',
     height: '70vh',
     width: '70vh'
   }
}));


const MainContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContentContainer}>
        <TimeSlider className={classes.TimeSlider}/>
        <Box className={classes.FloorPlanCanvas}>
          <Points></Points>
        </Box>
    </Box>
  );
}
export default MainContent;
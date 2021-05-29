import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TimeSlider from './TimeSlider';
import DevicePoints from './DevicePoints';

import ExampleBlueprint from '../../../assets/uploaded_blueprints/example.jpg';

const useStyles = makeStyles((theme) => ({
   blueprintContainer: {
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
  }
}));

const MainContent = () => {
  const classes = useStyles();
  const deviceLocationTemp = [{deviceN:1, x:150,y:200},{deviceN:2, x:256,y:61},{deviceN:3, x:135,y:61}];
  const devicePoints = deviceLocationTemp.map((obj) => {
    return (
      <DevicePoints deviceN={obj.deviceN} x={obj.x} y={obj.y}/>
    );
  });
  return (
    <Box className={classes.mainContentContainer}>
        <TimeSlider className={classes.TimeSlider}/>
        <Box className={classes.floorPlanCanvas}>
          {devicePoints}
        </Box>
    </Box>
  );
}
export default MainContent;
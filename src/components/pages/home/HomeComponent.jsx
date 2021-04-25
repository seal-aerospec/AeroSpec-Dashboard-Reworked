import TimeSlider from './TimeSlider';

import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import ExampleBlueprint from '../../../assets/uploaded_blueprints/example.jpg';
import Points from './Points';
import {ImageBackground} from 'react-native';

const useStyles = makeStyles((theme) => ({
   homeContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '3vh 5vh 3vh 5vh',
   },
   graphBtn: {
      backgroundColor: "white",
      padding: '12px 24px',
      margin: theme.spacing(1),
      borderRadius: '10em',
      fontSize: '16px',
      color: '#707070',
      textTransform: 'none',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#E4EBF2',
    },
    blueprintContainer: {
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'white',
       padding: '2vh',
    }
}));

const HomeComponent = () => {
   const classes = useStyles();
   const windowOpener = () => {
      console.log('haha');
   }
   return (
      <Box className={classes.homeContainer}>
         <Box>
            <Button className={classes.graphBtn}>
               Nano Particle
            </Button>
            <Button className={classes.graphBtn}>
               Gas
            </Button>
            <Button className={classes.graphBtn}>
               Temperature
            </Button>
         </Box>
         <Box className={classes.blueprintContainer}>
            <TimeSlider />
            <div id="new-point">
               <Points onPress={windowOpener}></Points>
            </div>
            <img src={ExampleBlueprint}></img>
         </Box>
      </Box>
   );
}
//This is originally under <TimeSlider>: <img src={ExampleBlueprint} alt="blueprint" /> and then <Points onPress={windowOpener}/>
//Q1: how to put a point properly on the floorplan img
//failing...
//windowOpener should open a small window on the right side of the screen that displays the info of the chosen device
//HOW?????
export default HomeComponent;

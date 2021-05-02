import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TimeSlider from './TimeSlider';

import ExampleBlueprint from '../../../assets/uploaded_blueprints/example.jpg';

const useStyles = makeStyles((theme) => ({
   blueprintContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '2vh',
   }
}));
const MainContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.blueprintContainer}>
      <TimeSlider />
      <img src={ExampleBlueprint} alt="blueprint" />
    </Box>
  );
}
export default MainContent;
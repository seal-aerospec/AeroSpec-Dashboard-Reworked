import CategoryButtons from '../global/category-btns/CategoryButtons';
import ExampleBlueprint from '../../../assets/uploaded_blueprints/example.jpg';

import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(() => ({
   homeContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '3vh 5vh 3vh 5vh',
   },
   blueprintContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '2vh',
      height: '40vh'
   },
   blueprint: {
      objectFit: 'cover',
      width: '100%',
      height: '100%'
   }
}));

const DeviceDetailsComponent = () => {
   const classes = useStyles();
   const deviceId = useParams();
   return (
      <Box className={classes.homeContainer}>
         <CategoryButtons parentLink={`/device-details/${deviceId.deviceId}`}/>
         <Box className={classes.blueprintContainer}>
            <img src={ExampleBlueprint} alt="blueprint" className={classes.blueprint}/>
         </Box>
         <Box className={classes.blueprintContainer}>
            <Typography color="textPrimary">
               Device Name: {deviceId.deviceId}
            </Typography>
            <Typography color="textPrimary">
               Category: {deviceId.category}
            </Typography>
         </Box>
      </Box>
   );
}

export default DeviceDetailsComponent;
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TimeSlider from './TimeSlider';
import DevicePoints from './DevicePoints';

import ExampleBlueprint from '../../../assets/uploaded_blueprints/example.jpg';

import { Storage } from 'aws-amplify';
import { useEffect, useState } from 'react';

const useStyles = makeStyles(() => ({
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
      height: '800px',
      width: '800px',
   }
}));

const MainContent = () => {
   const classes = useStyles();
   let [devicePoints, setDevicePoints] = useState([]);

   useEffect(() => {
      async function getDevices() {
         let count = 1;
         // TODO: replace with user's ID
         let deviceList = await Storage.get("user456", {download: true});
         deviceList = await deviceList.Body.text();
         deviceList = await JSON.parse(deviceList);
         console.log(deviceList);
         setDevicePoints(deviceList.deviceList.map((obj) => {
            return (
               // TODO: replace with real device name
               <DevicePoints deviceN={obj.name + count++} x={obj.coordinates.x} y={obj.coordinates.y} />
            );
         }));
      }
      getDevices();
   }, []);

   return (
      <Box className={classes.blueprintContainer}>
         <TimeSlider className={classes.TimeSlider} />
         <Box className={classes.floorPlanCanvas}>
            {devicePoints}
         </Box>
      </Box>
   );
}
export default MainContent;
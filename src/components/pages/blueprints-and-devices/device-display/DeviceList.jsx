import React from 'react';
import Device from './Device';
import DeviceRegisterButton from './DeviceRegisterButton';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Storage } from 'aws-amplify';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
   listContainer: {
      height: '100%',
      padding: 5,
      margin: theme.spacing(3),
   },
   header: {
      display: 'flex',
      margin: theme.spacing(1),
      justifyContent: 'space-between',
      flexWrap: 'wrap',
   },
   text: {
      color: '#2E4765',
      opacity: '55%',
   }
}));

const DeviceList = (props) => {
   const classes = useStyles();
   const [deviceList, setDeviceList] = useState([]);

   useEffect(() => {
      fetchDeviceList();
   }, []);

   async function handleRegSuccess(serialN, deviceNickName) {
      try {
         // TODO: change the name of user
         let deviceDataList = await Storage.get("user457", {download: true});
         deviceDataList = await deviceDataList.Body.text();
         deviceDataList = await JSON.parse(deviceDataList);
         deviceDataList.deviceList.push({
            "serialNumber": serialN,
            "nickName": deviceNickName,
            "coordinate": props.registeredCoordinate
         });
         await Storage.put("user457", deviceDataList);
      } catch (err) {
         console.log("ERROR:", err);
      }
      fetchDeviceList();
      // if (serialN !== '') {
      //    setDeviceList([...deviceList, <Device serialN={serialN}/>])
      // }
   }
   async function fetchDeviceList() {
      try {
         // TODO: change the name of user
         let deviceDataList = await Storage.get("user457", {download: true, cacheControl: 'no-cache'});
         deviceDataList = await deviceDataList.Body.text();
         deviceDataList = await JSON.parse(deviceDataList);
         const deviceCardsGroup = deviceDataList.deviceList.map((obj) => {
            return (
              <Device serialN={obj.serialNumber} nickName={obj.nickName}/>
            );
          });
         setDeviceList(deviceCardsGroup);
      } catch (err) {
         console.log("ERROR:", err);
      }
   }

   return (
      <Paper variant="outlined" square className={classes.listContainer}>
         <Box className={classes.header}>
            <Typography display="inline" variant="h5">My Devices</Typography>
            <DeviceRegisterButton
               setRegisterOpen={props.setRegisterOpen}
               registerOpen={props.registerOpen}
               disableCanvas={props.disableCanvas}
               addDeviceFunc={handleRegSuccess}/>
         </Box>
         <Box>
            {deviceList}
         </Box>
      </Paper>
   );
}

export default DeviceList;
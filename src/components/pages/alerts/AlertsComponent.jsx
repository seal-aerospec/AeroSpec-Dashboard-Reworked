import Alert from './Alert';
import TimePicker from './TimePicker';
import { listSchemaNews } from '../../../graphql/queries';
import {API} from 'aws-amplify';
import React, {useEffect, useState} from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

const AlertsComponent = () => {
   const [selectedDateFrom, setSelectedDateFrom] = useState(new Date());
   const [selectedDateTo, setSelectedDateTo] = useState(new Date());

   const handleDateChangeFrom = (date) => {
     setSelectedDateFrom(date);
   };

   const handleDateChangeTo = (date) => {
     setSelectedDateTo(date);
   };

   const useStyles = makeStyles(() => ({
      RAContainer: {
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         margin: '3vh 5vh 3vh 5vh',
      }
   }));

   const initialDeviceData = [];
   const classes = useStyles();
   let [deviceData, setDeviceData] = useState(initialDeviceData);

   async function listDeviceInfo() {
      console.log("listDeviceInfo");
      try {
        const store = await API.graphql({ query: listSchemaNews });
        const info = store.data.listSchemaNews;
        console.log("info items", store);
        let filteredData = [];
        for (let i = 0; i < info.items.length; i++) {
           if (info.items[i].equiv_CO2_ppm > 15) {
              filteredData.push(info.items[i])
           }
        }
        setDeviceData(filteredData);
        console.log("deviceData", deviceData);
      } catch (err) {
        console.log(err);
      }
   }

   useEffect(() => {
      listDeviceInfo();
   }, []);

   const cateComponent = deviceData.map((obj) => {
      return (
         <Alert 
            date={obj.date} 
            time={obj.time} 
            id={obj.id} 
            longitude={obj.Longitude}
            latitude={obj.Latitude}
            itemValue={obj.equiv_CO2_ppm}/>
      );
    })

   return (
      <Box padding="1vw 10vw 3vw 10vw">
         <TimePicker
            selectedDateFrom={selectedDateFrom}
            selectedDateTo={selectedDateTo}
            handleDateChangeFrom={handleDateChangeFrom}
            handleDateChangeTo={handleDateChangeTo}
         />
         <Box>CO2 threshold: 15</Box>
         <Box>
            {cateComponent}
         </Box>
      </Box>
    );
}

export default AlertsComponent;
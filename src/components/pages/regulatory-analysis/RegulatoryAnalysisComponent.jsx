import {getSchemaNew, listSchemaNews} from '../../../graphql/queries';
import { API } from 'aws-amplify';
import React, { useEffect, useState } from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

const RegulatoryAnalysisComponent = () => {
  const useStyles = makeStyles(() => ({
    RAContainer: {
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       margin: '3vh 5vh 3vh 5vh',
    }
 }));
   const initialDeviceData = {data: ''};
   const classes = useStyles();
   let [deviceData, setDeviceData] = useState(initialDeviceData);
   const initialDeviceGetData = {data: ''};
   let [deviceGetData, setDeviceGetData] = useState(initialDeviceGetData);
   async function listDeviceInfo() {
      console.log("listDeviceInfo");
      try {
        const store = await API.graphql({ query: listSchemaNews });
        const info = store.data.listSchemaNews;
        console.log("info items", store);
        setDeviceData(info.items);
        console.log("deviceData", deviceData);
      } catch (err) {
        console.log(err);
      }
    }

    async function getDeviceInfo() {
      try {
        const store = await API.graphql({ query: getSchemaNew, variables: {id: '2', time: '114121'}});
        const info = store.data.getSchemaNew;
        console.log("get items", store);
        setDeviceGetData(info);
        console.log("deviceGetData", deviceGetData);
      } catch (err) {
        console.log(err);
      }
    }

    useEffect(() => {
      listDeviceInfo();
      getDeviceInfo();
    }, []);

   return (
      <Box className={classes.RAContainer}>
        <p>Test List ITEM API:</p>
        <p>{JSON.stringify(deviceData)}</p>
        <p>Test Get ITEM API:</p>
        <p>{JSON.stringify(deviceGetData)}</p>
      </Box>
    );
}

export default RegulatoryAnalysisComponent;
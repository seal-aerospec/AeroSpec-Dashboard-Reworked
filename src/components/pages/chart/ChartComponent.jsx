import LineChart from '../global/charts/LineChart';

import * as subscriptions from './../../../graphql/subscriptions';

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from './../../../graphql/queries';
import * as mutations from './../../../graphql/mutations';

import { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';


const ChartComponent = (props) => {
   const [allData, setAllData] = useState([]);
   const [xData, setXData] = useState([1, 1, 1]);
   const [yData, setYData] = useState([]);

   const tick = 5000;

   useEffect(() => {
      const interval = setInterval(() => {
         console.log("outter");
          fetchData();
          setXData(allData.testDataX);
          //console.log("all data", allData);
         }, tick);
      return () => {
         clearInterval(interval);
      }
   }, [])

   const fetchData = async () => {
      try {
         const chartData = await API.graphql(graphqlOperation(queries.listSensorDatas));
         const chartList = chartData.data.listSensorDatas.items;
         const chartByID = await API.graphql(graphqlOperation(queries.getSensorData, { id: "281039e5-2dfc-48a6-a71a-8e5883768f39" }));
         //const idData = chartByID.data.getSensorData.testDataX;
         console.log('ID Data', chartByID);
         //console.log('chart Data', chartData);
         //console.log('chart List', chartList)
         //setAllData(chartData.data.listSensorDatas.items);

         //setXData(chartList[0]);
         //console.log('X Data', xData);
         //console.log('all data', allData);
      } catch (error) {
         console.log("error on fetching chart data", error);
      }
   }

   const clickTest = () => {
      setXData([10, 10, 10]);
      console.log('xdat', xData);
   }


   return ( 
      <div>
         <Button onClick={clickTest}>butt</Button>
         <LineChart data={xData} />
      </div>
    );
}
 
export default ChartComponent;
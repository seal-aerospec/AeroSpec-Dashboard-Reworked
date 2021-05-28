import Box from '@material-ui/core/Box';
import Alert from './Alert';

import { useState } from 'react';

import TimePicker from './TimePicker';

const AlertsComponent = () => {
   const [selectedDateFrom, setSelectedDateFrom] = useState(new Date());
   const [selectedDateTo, setSelectedDateTo] = useState(new Date());

   const handleDateChangeFrom = (date) => {
     setSelectedDateFrom(date);
   };

   const handleDateChangeTo = (date) => {
     setSelectedDateTo(date);
   };

   return (
      <Box padding="1vw 10vw 3vw 10vw">
         <TimePicker
            selectedDateFrom={selectedDateFrom}
            selectedDateTo={selectedDateTo}
            handleDateChangeFrom={handleDateChangeFrom}
            handleDateChangeTo={handleDateChangeTo}
         />
         <Box>
            <Alert />
            <Alert />
            <Alert />
         </Box>
      </Box>
    );
}

export default AlertsComponent;
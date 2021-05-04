import Box from '@material-ui/core/Box';
import Alert from './Alert';

import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Box display="flex" justifyContent="space-around">
               <KeyboardDatePicker
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-from"
                  label="Date From"
                  value={selectedDateFrom}
                  onChange={handleDateChangeFrom}
               />
               <KeyboardTimePicker
                  variant="inline"
                  margin="normal"
                  id="time-picker-from"
                  label="Time From"
                  value={selectedDateFrom}
                  onChange={handleDateChangeFrom}
                  KeyboardButtonProps={{
                     'aria-label': 'change time',
                  }}
               />
               <KeyboardDatePicker
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-to"
                  label="Date To"
                  value={selectedDateTo}
                  onChange={handleDateChangeTo}
                  KeyboardButtonProps={{
                     'aria-label': 'change date',
                  }}
               />
               <KeyboardTimePicker
                  variant="inline"
                  margin="normal"
                  id="time-picker-to"
                  label="Time To"
                  value={selectedDateTo}
                  onChange={handleDateChangeTo}
                  KeyboardButtonProps={{
                     'aria-label': 'change time',
                  }}
               />
            </Box>
         </MuiPickersUtilsProvider>
         <Box>
            <Alert />
            <Alert />
            <Alert />
         </Box>
      </Box>
    );
}

export default AlertsComponent;
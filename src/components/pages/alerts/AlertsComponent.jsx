import Box from '@material-ui/core/Box';
import Alert from './Alert';

import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const AlertsComponent = () => {
   const [selectedDateFrom, setSelectedDateFrom] = React.useState(new Date());
   const [selectedDateTo, setSelectedDateTo] = React.useState(new Date());

   const handleDateChangeFrom = (date) => {
     setSelectedDateFrom(date);
   };

   const handleDateChangeTo = (date) => {
     setSelectedDateTo(date);
   };

   return (
      <Box padding="3vh 10vh 3vh 10vh">
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
            <KeyboardDatePicker
               variant="inline"
               format="MM/dd/yyyy"
               margin="normal"
               id="date-picker-inline"
               label="Date From"
               value={selectedDateFrom}
               onChange={handleDateChangeFrom}
            />
            <KeyboardTimePicker
               variant="inline"
               margin="normal"
               id="time-picker"
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
               id="date-picker-inline"
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
               id="time-picker"
               label="Time To"
               value={selectedDateTo}
               onChange={handleDateChangeTo}
               KeyboardButtonProps={{
                  'aria-label': 'change time',
               }}
            />
            </Grid>
         </MuiPickersUtilsProvider>
         <Alert />
         <Alert />
         <Alert />
      </Box>
    );
}

export default AlertsComponent;
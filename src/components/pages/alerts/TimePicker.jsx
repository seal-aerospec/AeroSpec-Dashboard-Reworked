import Box from '@material-ui/core/Box';
import DateFnsUtils from '@date-io/date-fns';
import {
   MuiPickersUtilsProvider,
   KeyboardTimePicker,
   KeyboardDatePicker,
} from '@material-ui/pickers';

const TimePicker = (props) => {
   return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <Box display="flex" justifyContent="space-around">
            <KeyboardDatePicker
               variant="inline"
               format="MM/dd/yyyy"
               margin="normal"
               id="date-picker-from"
               label="Date From"
               value={props.selectedDateFrom}
               onChange={props.handleDateChangeFrom}
            />
            <KeyboardTimePicker
               variant="inline"
               margin="normal"
               id="time-picker-from"
               label="Time From"
               value={props.selectedDateFrom}
               onChange={props.handleDateChangeFrom}
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
               value={props.selectedDateTo}
               onChange={props.handleDateChangeTo}
               KeyboardButtonProps={{
                  'aria-label': 'change date',
               }}
            />
            <KeyboardTimePicker
               variant="inline"
               margin="normal"
               id="time-picker-to"
               label="Time To"
               value={props.selectedDateTo}
               onChange={props.handleDateChangeTo}
               KeyboardButtonProps={{
                  'aria-label': 'change time',
               }}
            />
         </Box>
      </MuiPickersUtilsProvider>
   );
}

export default TimePicker;
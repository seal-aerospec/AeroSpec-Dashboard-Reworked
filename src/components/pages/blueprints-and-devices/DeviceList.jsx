import Device from './Device';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
   listContainer: {
      height: '100%',
      padding: 5,
      margin: '2vh',
   },
   header: {
      display: 'flex',
      margin: '1vw',
      justifyContent: "space-between"
   }
});

const DeviceList = () => {
   const classes = useStyles();
   return (
      <Paper variant="outlined" square className={classes.listContainer}>
         <Box className={classes.header}>
            <Typography display="inline" variant="h5">My Devices</Typography>
            <Button>Add +</Button>
         </Box>
         <Box>
            <Device />
         </Box>
      </Paper>
   );
}

export default DeviceList;
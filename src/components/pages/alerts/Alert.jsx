import {useState} from 'react';

import {makeStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import BellIcon from '../../../assets/UI_component_svg/BellIcon';
import BellIcon2 from '../../../assets/UI_component_svg/BellIcon2';
import ExampleAlert from '../../../assets/uploaded_blueprints/alerts-floor-plan-icon.jpg';

const useStyles = makeStyles({
   alertCards: {
      border: '2.5px solid #FFFFFF',
      borderRadius: '5px',
      width: 'auto',
      marginTop: '3vh',
      "&:hover": {
         transition: '0.13s',
         backgroundColor: '#F4FFFF',
         borderColor: '#A2DAD9',
      }
   },
   cardContent: {
      display: 'flex',
      alignItems: 'center',
   },
   bellIcon: {
      marginTop: "1vh",
      marginRight: "1vw",
      height: '30%',
      width: 'auto',
   },
   alertContent: {
      display: 'flex',
      alignSelf: 'center',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
   },
   exampleMinView: {
      borderRadius: '5px',
      width: 'auto',
      height: 'auto',
      maxHeight: '15vh',
      maxWidth: 'auto',
      border: '1px solid lightgray',
   },
});

const Alert = (props) => {
   const classes = useStyles();
   let [bellIcon, setBellIcon] = useState(<BellIcon2 />);

   return (
      <Card className={classes.alertCards}>
         <CardContent
            onMouseOver={() => setBellIcon(<BellIcon />)}
            onMouseOut={() => setBellIcon(<BellIcon2 />)}
            className={classes.cardContent}
         >
            <Box alignSelf="flex-start">
               <IconButton className={classes.bellIcon}>
                  {bellIcon}
               </IconButton>
            </Box>
            <Box className={classes.alertContent}>
               <Box>
                  <Typography variant="subtitle2" color="textSecondary">Date: {props.date}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">Time: {props.time}</Typography>
               </Box>
               <Box marginBottom="1vh">
                  <Typography variant="h6" color="textPrimary">Device {props.id} Reading is very unhealthy</Typography>
                  <Typography variant="h6" color="textPrimary" gutterBottom="true">Open window near position: {props.latitude} (Latitude), {props.longitude} (Longitude)</Typography>
               </Box>
               <Box>
                  <Typography variant="body1" color="textPrimary">High carbon dioxide levels detected: {props.itemValue}</Typography>
               </Box>
            </Box>
            <Box>
               <img src={ExampleAlert} className={classes.exampleMinView} alt="Device with Alert"></img>
            </Box>
         </CardContent>
      </Card>
   );
}

export default Alert;
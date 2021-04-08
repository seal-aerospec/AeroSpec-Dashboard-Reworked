import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import BellIcon from '../../../assets/UI_component_svg/BellIcon';
import ExampleAlert from '../../../assets/uploaded_blueprints/alerts-floor-plan-icon.jpg';

const useStyles = makeStyles({
   alertCards: {
      marginTop: '3vh'
   },
   alertHeader: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
   },
   bellIcon: {
      height: '30%',
      width: 'auto',
      margin: '5vh'
   },
   cardContent: {
      height: '30vh',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      overflow: 'hidden',
      padding: '5vh',
    },
   exampleMinView: {
      flexShrink: 0,
      height: '100%',
      width: 'auto',
      marginLeft: 'auto'
   },
});

const Alert = () => {
   const classes = useStyles();
   return (
      <Card className={classes.alertCards}>
         <CardContent className={classes.cardContent}>
            <div>
               <Box className={classes.alertHeader}>
                  <Box display="flex" flexDirection="row">
                     <IconButton>
                        <BellIcon />
                     </IconButton>
                     <div>
                        <Typography variant="subtitle1">(MMMM DD, YYYY)</Typography>
                        <Typography variant="h5">Machine Learning Suggestion</Typography>
                     </div>
                  </Box>
                  <div>
                     <Typography>Sensor message</Typography>
                  </div>
               </Box>
            </div>
            <img src={ExampleAlert} className={classes.exampleMinView} alt="Device with Alert"></img>
         </CardContent>
      </Card>
   );
}

export default Alert;
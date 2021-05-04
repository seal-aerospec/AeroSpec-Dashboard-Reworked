import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

// import BellIcon from '../../../assets/UI_component_svg/BellIcon';
import BellIcon2 from '../../../assets/UI_component_svg/BellIcon2';
import ExampleAlert from '../../../assets/uploaded_blueprints/alerts-floor-plan-icon.jpg';

const useStyles = makeStyles({
   alertCards: {
      borderRadius: '15px',
      maxHeight: '20vh',
      marginTop: '3vh'
   },
   alertContent: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
   },
   bellIcon: {
      height: '30%',
      width: 'auto',
   },
   cardContent: {
      height: '30vh',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      overflow: 'hidden',
      padding: '3vh',
    },
   exampleMinView: {
      flexShrink: 0,
      objectFit: 'contain',
      marginLeft: 'auto'
   },
});

const Alert = () => {
   const classes = useStyles();
   return (
      <Card className={classes.alertCards}>
         <CardContent className={classes.cardContent}>
            <Box marginRight="1vw">
               <IconButton className={classes.bellIcon}>
                  <BellIcon2 />
               </IconButton>
            </Box>
            <Box className={classes.alertContent}>
               <Box marginBottom="5vh">
                  <Typography variant="subtitle1">(MMMM DD, YYYY)</Typography>
                  <Typography variant="h5">Machine Learning Suggestion</Typography>
               </Box>
               <Box>
                  <Typography>Message of what sensor detected</Typography>
               </Box>
            </Box>
            <img src={ExampleAlert} className={classes.exampleMinView} alt="Device with Alert"></img>
         </CardContent>
      </Card>
   );
}

export default Alert;
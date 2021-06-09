import { makeStyles, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeviceIcon from '../../../assets/UI_component/source 2.png';


const DevicePoints = (props) => {
  const useStyles = makeStyles((theme) => ({
    points: {
      width: '3px',
      height: '3px',
      backgroundImage: `url(${DeviceIcon})`,
      backgroundSize: 'contain',
      top: `${props.y}px`,
      left: `${props.x}px`,
      postion: 'relative'
    }
  }));

  const classes = useStyles();

  return (
    <IconButton
      className={classes.points}
      component={Link}
      to={`/device-details/${props.deviceN}/co2`}
    >
    </IconButton>
  );
}

export default DevicePoints;
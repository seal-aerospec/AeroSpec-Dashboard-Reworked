import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  graphBtn: {
    backgroundColor: "white",
    padding: '12px 24px',
    margin: theme.spacing(1),
    borderRadius: '10em',
    fontSize: '16px',
    color: '#707070',
    textTransform: 'none',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#E4EBF2',
  },
}));

const CategoryButtons = (props) => {
  const classes = useStyles();
  const category = [
    {short:"pc", long:"Particle Count"},
    {short:"co2", long: "Carbon Dioxide"},
    {short:"voc", long: "VOC"},
    {short:"hmd", long: "Humidity"},
    {short:"temp", long: "Temperature"},
    {short:"env-pm", long: "Environment Particles"},
  ];
  const cateComponent = category.map((obj) => {
    return (
      <Button
        className={classes.graphBtn}
        component={Link}
        to={`${props.parentLink}/${obj.short}`}>
        {obj.long}
      </Button>
    );
  })
  return (
    <Box>
       {cateComponent}
       <Button
        className={classes.graphBtn}
        component={Link}
        to={`/device-details/1/co2`}>
        Device Details
      </Button>
    </Box>
  );
}

export default CategoryButtons;
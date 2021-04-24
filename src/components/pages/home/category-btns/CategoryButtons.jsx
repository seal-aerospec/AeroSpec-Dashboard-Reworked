import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useRouteMatch } from 'react-router-dom';
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

const CategoryButtons = () => {
  let { url } = useRouteMatch();
  const classes = useStyles();
  const category = [
    {short:"pc", long:"Particle Count"},
    {short:"co2", long: "Carbon Dioxide"},
    {short:"voc", long: "VOC"},
    {short:"hmd", long: "Humidity"},
    {short:"temp", long: "Temperature"},
    {short:"env-pm", long: "Environment Particles"},
    {short:"device-details", long: "Device Details"}
  ];
  const cateComponent = category.map((obj) => {
    const trueUrl = (url === "/") ? "/home": url;
    return (
      <Button
        className={classes.graphBtn}
        component={Link}
        to={`${trueUrl}/${obj.short}`}>
        {obj.long}
      </Button>
    );
  })
  return (
    <Box>
       {cateComponent}
    </Box>
  );
}

export default CategoryButtons;
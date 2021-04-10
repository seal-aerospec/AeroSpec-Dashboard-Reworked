import { useState } from 'react';

import { makeStyles, withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
   btn: {
      backgroundColor: "white",
      padding: '12px 36px',
      borderRadius: '10em',
      fontSize: '16px',
      color: '#707070',
      textTransform: 'none',
   }
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
   grouped: {
     margin: theme.spacing(2),
     border: '1px solid #E4EBF2',
     '&:not(:first-child)': {
       borderRadius: '10em',
     },
     '&:first-child': {
       borderRadius: '10em',
     },
   },
 }))(ToggleButtonGroup);

const SettingComponent = () => {
   const classes = useStyles();
   const [page, setPage] = useState('account');

   const handlePage = (event, newPage) => {
      setPage(newPage);
   };

   return (
      <Box display="flex" justifyContent="center" margin="3vh 5vh 3vh 5vh">
         <StyledToggleButtonGroup
            value={page}
            exclusive
            onChange={handlePage}
            aria-label="settings page"
         >
            <ToggleButton value="account" className={classes.btn}>
               Account
            </ToggleButton>
            <ToggleButton value="payment" className={classes.btn}>
               Payment
            </ToggleButton>
            <ToggleButton value="contact" className={classes.btn}>
               Contact
            </ToggleButton>
            <ToggleButton value="user" className={classes.btn}>
               User
            </ToggleButton>
        </StyledToggleButtonGroup>
      </Box>
    );
}

export default SettingComponent;
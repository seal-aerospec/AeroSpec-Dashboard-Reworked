import NavChoices from './NavChoices';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const NavBar = () => {
   return ( 
      <Box height="100%" width="100%" bgcolor="primary.main">
         <Typography variant="h4" color="primary" style={{textAlign: 'center', paddingTop: '2vh', paddingBottom: '2vh', backgroundColor: 'white'}}>
            AeroSpec
         </Typography>
         <NavChoices text="Home" link="" icon={<HomeOutlinedIcon fontSize="large" style={{color: 'white'}} />} />
         <NavChoices text="Alerts" link="alerts" />
         <NavChoices text="Blueprints & Devices" link="blueprints-and-devices" />
         <NavChoices text="Settings" link="settings" />
      </Box>
    );
}
 
export default NavBar;
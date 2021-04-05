import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const NavChoices = (props) => {
   return ( 
      <Box>
         <Button
          startIcon={props.icon}
          variant="text" 
          color="primary"
          style={{height: '8vh'}} 
          fullWidth>
            <Link to={props.link} style={{textDecoration: 'none', color: 'white'}}>
               {props.text}
            </Link>
         </Button>
         <hr style={{width: '90%', opacity: '30%'}} />
      </Box>
    );
}
 
export default NavChoices;
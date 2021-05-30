import { useRef, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import DeviceIcon from '../../../../assets/UI_component/source 2.png';
import EditBlueprintButton from './EditBlueprintButton';

import { Storage } from 'aws-amplify';

const useStyles = makeStyles((theme) => ({
   hidden: {
      display: 'none',
   },
   canvas: {
      position: 'relative',
      zIndex: 20,
   },
   blueprint: {
      position: 'absolute',
      zIndex: 1,
   },
   blueprintHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1vh',
   },
   activeButton: {
      height: 25,
      backgroundColor: '#3e6eb0',
      color: '#ffffff',
      borderRadius: 20,
   },
   saveBtn: {
      backgroundColor: "#486EAB",
      padding: '12px 24px',
      margin: theme.spacing(1),
      borderRadius: '10em',
      fontSize: '16px',
      color: '#FFFFFF',
      textTransform: 'none',
      borderStyle: 'solid',
      borderWidth: '1px',
   },
   text: {
      color: '#2E4765',
      opacity: '56%',
   }
}));

const BlueprintCanvas = (props) => {
   const classes = useStyles();
   const canvasRef = useRef(null);
   let currDevice = useRef(undefined);
   let [modalOpen, setModalOpen] = useState(false);
   let [blueprint, setBlueprint] = useState();

   // draws placed device on blueprint
   useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const dot = new Image();
      dot.src = DeviceIcon;
      canvas.addEventListener("click", function (event) {
         if (currDevice.current !== undefined) {
            context.clearRect(currDevice.current.x, currDevice.current.y, 25, 25);
         }
         var x = event.offsetX - 10;
         var y = event.offsetY - 10;
         context.drawImage(dot, x, y, 25, 25);
         currDevice.current = { "x": x, "y": y };
      });
   }, []);

   function handleImage(e) {
      var reader = new FileReader();
      reader.onload = function (event) {
         const canvas = canvasRef.current;
         const image = new Image();
         image.src = event.target.result;
         setBlueprint(event.target.result);

         // set the image and canvas width and height based on uploaded img
         image.onload = (event) => {
            document.getElementById("bp").width = event.target.width;
            document.getElementById("bp").height = event.target.height;
            canvas.width = event.target.width;
            canvas.height = event.target.height;
         }
      }
      reader.readAsDataURL(e.target.files[0]);
   }

   async function saveCoordinate() {
      if (currDevice.current) {
         props.dotList.push(currDevice);
         alert("A new device's location has been saved at (x: " + currDevice.current.x
            + " y: " + currDevice.current.y + ")");
         try {
            // TODO: change user456 with user's ID
            let deviceList = await Storage.get("user456", {download: true});
            deviceList = await deviceList.Body.text();
            deviceList = await JSON.parse(deviceList);
            // TODO: change device with name of device
            deviceList.deviceList.push({
               "name": "deviceName",
               "coordinates": {
                  "x": currDevice.current.x,
                  "y": currDevice.current.y
               }
            });
            await Storage.put("user456", deviceList);
            currDevice.current = undefined;
         } catch (err) {
            console.error("ERROR: " + err);
         }
      }
   }

   return (
      <Paper style={{ padding: "5vh" }}>
         <Box display="flex" flexWrap="wrap" className={classes.blueprintHeader}>
            <Typography variant="body1" className={classes.text}>
               Pick and place the sensor on its location
            </Typography>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
               <EditBlueprintButton
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  handleImage={handleImage}
               />
               <Button className={classes.saveBtn} onClick={saveCoordinate}>
                  Save Changes
               </Button>
            </Box>
         </Box>
         <Box display="flex" justifyContent="center">
            <img id="bp" src={blueprint} alt="blueprint"
               className={blueprint ? classes.blueprint : classes.hidden} />
            <canvas ref={canvasRef} width="700px" height="500px" className={classes.canvas} />
         </Box>
      </Paper>
   );
}

export default BlueprintCanvas;
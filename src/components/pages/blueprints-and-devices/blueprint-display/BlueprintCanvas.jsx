import { useRef, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import DeviceIcon from '../../../../assets/UI_component/source 2.png';
import ExampleBlueprint from '../../../../assets/uploaded_blueprints/example.jpg';
import EditBlueprintButton from './EditBlueprintButton';

const useStyles = makeStyles((theme) => ({
   canvas: {
      display: 'flex',
      flexDirection: 'column',
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
   const list = [];
   const classes = useStyles();
   const canvasRef = useRef(null);
   let [modalOpen, setModalOpen] = useState(false);

   // draws placed device on blueprint
   useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const img = document.getElementById("bp");
      img.onload = function () {
         context.drawImage(img, 0, 0, "100%", "100%");
      };
      img.src = ExampleBlueprint;
      var dot = new Image();
      dot.src = DeviceIcon;
      canvas.addEventListener("click", function (event) {
         var x = event.offsetX - 10;
         var y = event.offsetY - 10;
         context.drawImage(dot, x, y, 25, 25);
      });
   }, []);

   function drawOne(event) {
      var dot = new Image();
      dot.src = DeviceIcon;
      var x = event.nativeEvent.offsetX - 10;
      var y = event.nativeEvent.offsetY - 10;
      let each = { "x": x, "y": y };
      list.push(each);
      alert("A new device is placed");
      props.setDotList(list);
   }

   function handleImage(e) {
      let canvas = canvasRef.current;
      let ctx = canvas.getContext('2d');
      alert("New blueprint uploaded");
      var reader = new FileReader();
      reader.onload = function (event) {
         var img = new Image();
         img.onload = function () {
            ctx.drawImage(img, 0, 0);
         }
         img.src = event.target.result;
      }
      reader.readAsDataURL(e.target.files[0]);
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
               <Button className={classes.saveBtn}>
                  Save Changes
               </Button>
            </Box>
         </Box>
         <div>
            <canvas id="board" display="block" ref={canvasRef} width="700px" height="500px" onClick={drawOne} />
            <img id="bp" src={ExampleBlueprint} alt="blueprint" style={{ display: "none" }} />
         </div>
      </Paper>
   );
}

export default BlueprintCanvas;
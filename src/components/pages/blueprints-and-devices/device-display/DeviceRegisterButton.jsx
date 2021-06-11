import React from 'react';
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

import LoadingImage from '../../../../assets/UI_component/loading.gif';
import RegistSuccessImage from '../../../../assets/UI_component/regist_success.png';
const useStyles = makeStyles((theme) => ({
  registerBackDrop: {
    background: 'rgba(0,0,0,0.2)'
  },
  register: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '2vh',
    height: '70vh',
    width: '70vh',
    textAlign: 'center',
    alignItems: 'center'
  },
  success: {
    height: '50vh',
    width: '90vh',
    textAlign: 'left',
    wordWrap: 'break-word'
  },
  uploadField: {
    borderRadius: '2vh',
    height: '20%',
    width: '50%',
    backgroundColor: 'white',
    borderStyle: 'dashed',
    borderWidth: '2px',
    borderColor: '#c7cdd4',
    marginBottom: '3vh',
  },
  cancelButton: {
    height: '7vh',
    backgroundColor: "#FFFFFF",
    padding: '12px 24px',
    margin: theme.spacing(1),
    borderRadius: '5em',
    fontSize: '16px',
    color: '#486EAB',
    textTransform: 'none',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#486EAB',
  },
  saveButton: {
    height: '7vh',
    backgroundColor: "#486EAB",
    padding: '12px 24px',
    margin: theme.spacing(1),
    borderRadius: '5em',
    fontSize: '16px',
    color: '#FFFFFF',
    textTransform: 'none',
    borderStyle: 'solid',
    borderWidth: '1px',
  },
  text: {
    color: '#2E4765',
    opacity: '55%',
  },
  loadingImage: {
    height: '8vh',
    width: '8vh',
    hidden: 'false'
  },
  loadingImageHidden: {
    height: '8vh',
    width: '8vh',
    hidden: 'true'
  },
  registSuccessImg: {
    height: '10vh',
    width: '10vh'
  }
}));
const DeviceRegisterButton = (props) => {
  const classes = useStyles();
  const [successRegisterOpen, setRegisterSuccessOpen] = React.useState(false);
  const [deviceInfo, setDeviceRegInfo] = React.useState('[]');
  const [serialN, setSerialN] = React.useState("");
  const [loadingHidden, setLoadingHidden] = React.useState('hidden');
  const [deviceNickname, setDeviceNickname] = React.useState('');

  const handleClickOpen = () => {
    props.setRegisterOpen(true);
    setRegisterSuccessOpen(false);
  };

  const handleClose = () => {
    props.setRegisterOpen(false);
  };

  const handleBlueprintCanvasEditing = () => {
    props.setRegisterOpen(false);
    props.disableCanvas(false);
  }

  const handleRegisterSuccessClose = () => {
    setRegisterSuccessOpen(false);
  }
  async function handleSave() {
    if (serialN !== "") {
      setLoadingHidden('visible');
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({"deviceName":serialN})
      };
      fetch('https://awwwmy2l14.execute-api.us-west-2.amazonaws.com/dev/thing-register', requestOptions)
          .then(checkStatus)
          .then(response => response.text())
          .then(handleResponse);
    }
  }
  function handleResponse(response) {
    props.addDeviceFunc(serialN, deviceNickname);
    setRegisterSuccessOpen(true);
    setDeviceRegInfo(response);
    setTimeout(() => props.setRegisterOpen(false),3000);
    setLoadingHidden('hidden');
  }

  function checkStatus(response) {
    if (response.ok) {
      return response;
    } else {
       throw Error("Error in request: " + response.statusText);
    }
  }

  const certificateArn = (JSON.parse(deviceInfo).body === undefined)? '':JSON.parse(deviceInfo).body.certificateArn;
  const certificateId = (JSON.parse(deviceInfo).body === undefined)? '' :JSON.parse(deviceInfo).body.certificateId;
  return (
    <Box>
      <Button className={classes.text} onClick={handleClickOpen}>Add +</Button>
      <Dialog
      PaperProps={{
        classes: {
          root: classes.register
        }
      }}
      BackdropProps={{
        classes: {
          root: classes.registerBackDrop
        }
      }}
      open={props.registerOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Regsiter Device</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the device information
          </DialogContentText>
          <TextField
            value={serialN}
            onChange={event => setSerialN(event.target.value)}
            error={serialN === ""}
            helperText={serialN === "" ? 'Serial Number is Empty!' : ' '}
            id="register-serial-text"
            required
            autoFocus
            margin="dense"
            label="Serial Number"
            type="serialN"
            fullWidth
          />
          <TextField
            value={deviceNickname}
            onChange={event => setDeviceNickname(event.target.value)}
            margin="dense"
            label="Device Nick Name"
            type="deviceNickName"
            fullWidth
          />
        </DialogContent>
        <Button
            variant="contained"
            component="label"
            className={classes.uploadField}
            onClick={handleBlueprintCanvasEditing}
          >
            Click to Put Your Device On the Blueprint
        </Button>
        <DialogActions>
          <Button onClick={handleClose} className={classes.cancelButton}>
            Cancel
          </Button>
          <Button onClick={handleSave} className={classes.saveButton}>
            Save
          </Button>
          <Dialog
            PaperProps={{
              classes: {
                root: classes.success
              }
            }}
            BackdropProps={{
              classes: {
                root: classes.registerBackDrop
              }
            }}
            open={successRegisterOpen}
            onClose={handleRegisterSuccessClose}
            aria-labelledby="form-dialog-title"
          >
          <DialogContent>
            <DialogContentText>
              <img src={RegistSuccessImage} className={classes.registSuccessImg}/>
              Device (<b>{serialN}</b>) Registed Successfully
            </DialogContentText>
            <DialogContentText>
              Certificate ARN:
              </DialogContentText>
              <DialogContentText>
              {certificateArn}
              <DialogContentText/>
              <DialogContentText>
              Certificate Id: {certificateId}
              </DialogContentText>
              </DialogContentText>
          </DialogContent>
          </Dialog>
          <img src={LoadingImage} className={classes.loadingImage} style={{visibility: loadingHidden}}/>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default DeviceRegisterButton;
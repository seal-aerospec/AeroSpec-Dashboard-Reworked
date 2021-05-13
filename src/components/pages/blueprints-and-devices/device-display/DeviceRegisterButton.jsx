import React, { useEffect } from 'react';
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
  uploadField: {
    borderRadius: '2vh',
    height: '40%',
    width: '50%',
    backgroundColor: 'white',
    borderStyle: 'dashed',
    borderWidth: '2px',
    borderColor: '#c7cdd4',
    marginBottom: '3vh',
    boxShadow: 'none'
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
 }
}));
const DeviceRegisterButton = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [serialN, setSerialN] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSave() {
    if (serialN !== "") {
      setOpen(false);
      console.log(serialN);
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({"deviceName":serialN})
      };
      fetch('https://awwwmy2l14.execute-api.us-west-2.amazonaws.com/dev/thing-register', requestOptions)
          .then(checkStatus)
          .then(response => response.text())
          .then(response => console.log(response));
    }
  }

  function checkStatus(response) {
    if (response.ok) {
      return response;
    } else {
       throw Error("Error in request: " + response.statusText);
    }
  }

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
      open={open}
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
        </DialogContent>
        <Button
            variant="contained"
            component="label"
            className={classes.uploadField}
            onClick={handleClose}
          >
            Put Your Device On the Page
        </Button>
        <DialogActions>
          <Button onClick={handleClose} className={classes.cancelButton}>
            Cancel
          </Button>
          <Button onClick={handleSave} className={classes.saveButton}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default DeviceRegisterButton;
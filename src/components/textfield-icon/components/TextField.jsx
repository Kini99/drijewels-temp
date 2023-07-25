import { useState } from "react";
import {
  TextField,
  InputAdornment,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const TextFieldIcon = ({ iconEnd, ...props }) => {
  const [inputValue, setInputValue] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      <FormControl variant="standard" sx={{ width: "100%" }}>
        <TextField
          {...props}
          value={inputValue}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: iconEnd ? (
              <InputAdornment position="end" onClick={handleSubmit}>
                {iconEnd}
              </InputAdornment>
            ) : null,
          }}
        />
      </FormControl>
      {showDialog && (
        <Dialog onClose={handleClose} open>
          <DialogTitle fontFamily={"h1.fontFamily"}>Thank you!</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ color: "common.black" }}>
              You are now subscribed to our newsletter
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default TextFieldIcon;

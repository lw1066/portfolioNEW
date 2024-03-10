"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import styles from "./Modal.module.css";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "black", // Change this to your desired primary color
//     },
//     secondary: {
//       main: "white", // Change this to your desired secondary color
//     },
//     // Add more color options as needed
//   },
// });

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    backgroundColor: "black",
    color: "white",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Modal({ title, info1, info2, info3, info4 }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    // <ThemeProvider theme={theme}>
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="Project details"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id={styles.modalHead}>
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.black,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>{info1}</Typography>
          <Typography gutterBottom>{info2}</Typography>
          <Typography gutterBottom>{info3}</Typography>
          <Typography gutterBottom>{info4}</Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
    // </ThemeProvider>
  );
}

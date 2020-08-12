import React from 'react';
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: "fixed",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: '1500',

    '& img': {
      display: 'block',
      maxWidth: '60%',
      maxHeight: '80%',
      margin: '60px auto',
      boxShadow: '3px 5px 7px rgba(0,0,0,0.5)',
      border: '3px solid #fff'
    }
  }
})

export const Modal = ({image, close}) => {
  const classes = useStyles();

  return (
    <Box className={classes.backdrop} onClick={()=>{close(null)}}>
      <img src={image} alt=""/>
    </Box>
  );
}

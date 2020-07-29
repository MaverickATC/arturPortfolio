import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import bg from '../assets/bg2.jpeg';
import {Typography, Button} from '@material-ui/core';
import {Navbar} from './Navbar';

const useStyles = makeStyles({
  t_wrapper: {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `linear-gradient(to right, rgba(255,255,255,.85), rgba(255,255,255,.85)), url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '32%',
    padding: '3rem 6rem',

    '@media (max-width: 959px)': {
      padding: '2rem 3rem',
    },
    '@media (max-width: 599px)': {
      padding: '1rem',
    }
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    minHeight: 'calc(100vh - 50px)',
    textAlign: "center",
  },
  heading: {
    fontFamily: 'Playfair Display',
    fontWeight: '700'
  },
  subHeading: {
    fontFamily: 'Lato',
    fontWeight: '100',
  },
  button: {
    width: '12rem',
    borderWidth: '2px',
    borderRadius: '0',
    marginTop: '8rem',
  }
});

export const TopScreen = (props) => {
  const classes = useStyles();


  return (
    <header className={classes.t_wrapper}  id="back-to-top-anchor">
      <Navbar/>
      <div className={classes.contentWrapper}>
        <Typography variant="h2" color="primary" className={classes.heading}>Artur Voznenko</Typography>
        <Typography variant="h6" color="textSecondary" className={classes.subHeading}>Я знімаю
          нерухомість</Typography>
        <Button variant="outlined" color="primary" className={classes.button}
                onClick={props.click}>Детальніше</Button>
      </div>
    </header>
  )
};
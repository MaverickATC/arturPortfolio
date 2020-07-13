import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import bg from '../assets/bg2.jpeg';
import { Grid, Typography, Button } from '@material-ui/core';
import { Navbar } from './Navbar';

const useStyles = makeStyles({
    t_wrapper: {
        width: '100%',
        height: '100vh',
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,.85), rgba(255,255,255,.85)), url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center 68%',
        paddingRight: "6rem",
        paddingLeft: "6rem",
        paddingTop: '3rem',
        '@media (max-width: 959px)': {
            paddingRight: "3rem",
            paddingLeft: "3rem",
            paddingTop: '2rem',
        },
        '@media (max-width: 599px)': {
            paddingRight: "0",
            paddingLeft: "0",
            paddingTop: '2rem',
        }
    },
    h_margin: {
        marginTop: '26vh',
        fontFamily: 'Playfair Display',
        fontWeight: '700'
    },
    button: {
        marginTop: '6rem',
        minWidth: '12rem',
        borderWidth: '2px',
        borderRadius: '0'
    }
});

export const TopScreen = (props) => {
    const classes = useStyles();

    
    return (
        <section className={classes.t_wrapper}>
            <Grid container direction="column" alignItems="center" component="header">
                <Grid item container direction="row" justify="space-between" alignItems="center">
                    <Navbar />
                </Grid>
                <Grid item xs={10} style={{ textAlign: 'center' }}>
                    <Typography variant="h2" color="primary" className={classes.h_margin}>Artur Voznenko</Typography>
                    <Typography variant="h6" color="textSecondary" style={{ fontFamily: 'Lato', fontWeight: '100' }}>Я знімаю нерухомість</Typography>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={props.click}>Детальніше</Button>
                </Grid>
            </Grid>
        </section>
    )
};
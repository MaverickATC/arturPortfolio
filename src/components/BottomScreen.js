import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import { Social } from './Social';
import { Form } from './Form';

const useStyles = makeStyles({
    bs_wrapper: {
        background: '#f8f6f4',
        paddingRight: "6rem",
        paddingLeft: "6rem",
        paddingTop: '5rem',
        paddingBottom: '5rem',
        textAlign: 'center',
        '@media (max-width: 959px)': {
            paddingRight: "3rem",
            paddingLeft: "3rem",
            paddingBottom: '5rem',
            paddingTop: '2rem',
        },
        '@media (max-width: 599px)': {
            paddingRight: "1rem",
            paddingLeft: "1rem",
            paddingBottom: '5rem',
            paddingTop: '2rem',
        }
    },
    h_margin: {
        marginBottom: '3rem',
        fontFamily: 'Playfair Display',
        fontWeight: '700'
    }
});

export const BottomScreen = () => {
    const classes = useStyles();

    return (
        <footer className={classes.bs_wrapper}>
            <Typography variant="h4" color="textPrimary" className={classes.h_margin}>Напишіть мені</Typography>
            <Grid container justify="center">
                <Grid item container justify="center" spacing={2} xs={8} md={4}>
                    <Form />
                    <Social />
                </Grid>
            </Grid>
        </footer>
    )
}
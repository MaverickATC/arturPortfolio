import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    rw_wrapper: {
        background: '#f8f6f4',
        backgroundPosition: 'center center',
        paddingRight: "6rem",
        paddingLeft: "6rem",
        paddingTop: '5rem',
        paddingBottom: '5rem',
        textAlign: 'center',
        
        '@media (max-width: 959px)': {
            paddingRight: "3rem",
            paddingLeft: "3rem",
            paddingTop: '2rem',
        },
        '@media (max-width: 599px)': {
            paddingRight: "1rem",
            paddingLeft: "1rem",
            paddingTop: '2rem',
        }
    },
    h_margin: {
        marginBottom: '3rem',
        fontFamily: 'Playfair Display',
        fontWeight: '700',
    },
    top_image: {
        width: '100%',
        height: 'auto',
        paddingLeft: '1rem',
        '@media (max-width: 959px)': {
            paddingLeft: '0',
            paddingTop: '1rem',
            paddingRight: '.5rem'
        }
    },
    bottom_image: {
        width: '100%',
        height: 'auto',
        paddingLeft: '1rem',
        paddingTop: '1rem',
        '@media (max-width: 959px)': {
            paddingLeft: '.5rem'
        }
    }
});

export const RecentWorks = React.forwardRef((props, ref) => {
    const classes = useStyles();
    return (
        <section className={classes.rw_wrapper} ref={ref}>
            <Typography variant="h4" color="textPrimary" className={classes.h_margin}>Останні роботи</Typography>

            <Grid container>
                <Grid item container justify="center" alignItems="flex-start" xs={12}>
                    <Grid
                        item
                        xs={12}
                        md={8}
                        component="img"
                        src="https://via.placeholder.com/1200x700.png"
                        alt=""
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Grid item container justify="center" alignItems="flex-start" xs={12} md={4} style={{ marginBottom: '1rem' }}>
                        <Grid
                            item
                            xs={6}
                            md={12}
                            component="img"
                            src="https://via.placeholder.com/1200x700.png"
                            alt=""
                            className={classes.top_image}
                        />
                        <Grid
                            item
                            xs={6}
                            md={12}
                            component="img"
                            src="https://via.placeholder.com/1200x700.png"
                            alt=""
                            className={classes.bottom_image}
                        />
                    </Grid>
                </Grid>
                <Grid item container justify="center" alignItems="flex-start" xs={12}>
                    <Grid
                        item
                        xs={12}
                        component="img"
                        src="https://via.placeholder.com/1200x700.png"
                        alt=""
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Grid>
            </Grid>
        </section>
    )
});
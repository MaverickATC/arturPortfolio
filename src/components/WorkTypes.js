import React from 'react';
import { makeStyles, Grid, Typography, Button, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    wt_wrapper: {
        paddingRight: "6rem",
        paddingLeft: "6rem",
        paddingTop: '5rem',
        paddingBottom: '5rem',
        '@media (max-width: 959px)': {
            paddingRight: "3rem",
            paddingLeft: "3rem",
            paddingBottom: '2rem',
            paddingTop: '2rem',
        },
        '@media (max-width: 599px)': {
            paddingRight: "1rem",
            paddingLeft: "1rem",
            paddingBottom: '2rem',
            paddingTop: '2rem',
        }
    },
    text_grid: {
        padding: '5rem',
        '@media (max-width: 959px)': {
            padding: '3rem'
        },
        '@media (max-width: 599px)': {
            padding: '3rem 0'
        }
    },
    main_text_item: {
        textAlign: 'left',
        [theme.breakpoints.down(`md`)]: {
            textAlign: 'center'
        },
        [theme.breakpoints.up(`md`)]: {
            textAlign: 'left'
        },
    },
    text_item: {
        textAlign: 'left',
        order: 1,
        [theme.breakpoints.down(`md`)]: {
            order: 2,
            textAlign: 'center'
        },
        [theme.breakpoints.up(`md`)]: {
            order: 1,
            textAlign: 'left'
        },
    },
    image_item: {
        order: 2,
        [theme.breakpoints.down(`md`)]: {
            order: 1,
        },
        [theme.breakpoints.up(`md`)]: {
            order: 2,
        },
    },
    grid_header: {
        marginBottom: '2rem',
        fontFamily: 'Playfair Display',
        fontWeight: '700',
    },
    grid_text:{
        fontFamily: 'Lato', 
        fontWeight: '400'
    },
    button: {
        marginTop: '4rem',
        minWidth: '8rem',
        borderWidth: '2px',
        borderRadius: '0'
    }
}));

export const WorkTypes = () => {
    const classes = useStyles();
    return (
        <main className={classes.wt_wrapper} id="w">
            <Grid container direction="column" spacing={0}>
                <Grid item container xs={12} spacing={0}>
                    <Grid item xs={12} md={6} component="img" src="https://via.placeholder.com/500.png" alt="" />
                    <Grid item xs={12} md={6} className={classes.main_text_item}>
                        <Box component="section" className={classes.text_grid}>
                            <Typography variant="h4" color="textPrimary" className={classes.grid_header}>Зйомка інтер'єрів</Typography>
                            <Typography variant="body1" color="textSecondary" className={classes.grid_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                            <Button variant="outlined" color="primary" className={classes.button}>Дізнатися більше</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item container xs={12} spacing={0}>
                    <Grid item xs={12} md={6} className={classes.text_item}>
                        <Box component="section" className={classes.text_grid}>
                            <Typography variant="h4" color="textPrimary" className={classes.grid_header}>Зйомка нерухомості</Typography>
                            <Typography variant="body1" color="textSecondary" className={classes.grid_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                            <Button variant="outlined" color="primary" className={classes.button}>Дізнатися більше</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} component="img" src="https://via.placeholder.com/500.png" alt="" className={classes.image_item} />
                </Grid>
                <Grid item container xs={12} spacing={0}>
                    <Grid item xs={12} md={6} component="img" src="https://via.placeholder.com/500.png" alt="" />
                    <Grid item xs={12} md={6} className={classes.main_text_item}>
                        <Box component="section" className={classes.text_grid}>
                            <Typography variant="h4" color="textPrimary" className={classes.grid_header}>Аерозйомка</Typography>
                            <Typography variant="body1" color="textSecondary" className={classes.grid_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                            <Button variant="outlined" color="primary" className={classes.button}>Дізнатися більше</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item container xs={12} spacing={0}>
                    <Grid item xs={12} md={6} className={classes.text_item}>
                        <Box component="section" className={classes.text_grid}>
                            <Typography variant="h4" color="textPrimary" className={classes.grid_header}>Відеомонтаж</Typography>
                            <Typography variant="body1" color="textSecondary" className={classes.grid_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                            <Button variant="outlined" color="primary" className={classes.button}>Дізнатися більше</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} component="img" src="https://via.placeholder.com/500.png" alt="" className={classes.image_item} />
                </Grid>
            </Grid>
        </main>
    )
}
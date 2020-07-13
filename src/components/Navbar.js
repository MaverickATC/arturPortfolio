import React, { useState } from 'react';
import { makeStyles, Grid, Hidden, IconButton, Drawer, Divider, List, ListItem } from '@material-ui/core';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import DragHandleOutlinedIcon from '@material-ui/icons/DragHandleOutlined';
import { NavLink } from 'react-router-dom';
import { Social } from './Social';

const useStyles = makeStyles((theme) => ({
    links: {
        color: theme.palette.secondary.main,
        fontFamily: 'Lato',
        fontWeight: '400',
        textDecoration: 'none',
        marginRight: '1.5rem',
    },
    links_active: {
        color: theme.palette.textPrimary.main,
        fontFamily: 'Lato',
        fontWeight: '700',
        textDecoration: 'none',
        marginRight: '1.5rem',
    }
}));

export const Navbar = () => {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!isOpen);
    }

    return (
        <>
            <Hidden smDown>
                <Grid item xs={false} md={5} component="nav">
                    <NavLink to="/" exact className={classes.links} activeClassName={classes.links_active}>Головна</NavLink>
                    <NavLink to="/1" className={classes.links} activeClassName={classes.links_active}>Галерея</NavLink>
                    <NavLink to="/contacts" className={classes.links} activeClassName={classes.links_active}>Контакти</NavLink>
                </Grid>
            </Hidden>
            <Grid item xs={6} md={2} style={{ textAlign: 'center' }}>
                <PhotoCameraOutlinedIcon color="primary" />
            </Grid>
            <Hidden mdUp>
                <Grid item xs={6} style={{ textAlign: 'center' }}>
                    <IconButton onClick={toggleDrawer}>
                        <DragHandleOutlinedIcon />
                    </IconButton>
                    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer} style={{ background: '#f8f6f4'}}>
                                <PhotoCameraOutlinedIcon color="primary" style={{margin:'2rem auto'}} />
                        <Grid container direction="column" alignItems="flex-start" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                            <Grid item component="nav">
                                <List>
                                    <ListItem>
                                        <NavLink to="/" exact className={classes.links} activeClassName={classes.links_active}>Головна</NavLink>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem>
                                        <NavLink to="/1" className={classes.links} activeClassName={classes.links_active}>Галерея</NavLink>
                                    </ListItem>
                                </List>
                                <List>
                                    <ListItem>
                                        <NavLink to="/contacts" className={classes.links} activeClassName={classes.links_active}>Контакти</NavLink>
                                    </ListItem>
                                </List>
                                <Divider />
                            </Grid>
                            <Grid item container direction="row" justify="center" spacing={1} style={{ paddingTop: '2rem' }}>
                                <Social color="primary" />
                            </Grid>
                        </Grid>
                    </Drawer>
                </Grid>
            </Hidden>
            <Hidden smDown>
                <Grid item container justify="flex-end" spacing={2} xs={false} md={5} style={{ textAlign: 'center' }}>
                    <Social color="secondary" />
                </Grid>
            </Hidden>
        </>
    )
}
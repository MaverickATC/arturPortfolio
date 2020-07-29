import React, {useState} from 'react';
import {makeStyles, Hidden, IconButton, Drawer, Divider, List, ListItem} from '@material-ui/core';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import DragHandleOutlinedIcon from '@material-ui/icons/DragHandleOutlined';
import {NavLink} from 'react-router-dom';
import {Social} from './Social';

const useStyles = makeStyles((theme) => ({
  navbarWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: '100%',
    '@media (max-width: 959px)': {
      justifyContent: 'space-between',
    },
  },
  linksWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    width: '400px',
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  socialWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    width: '400px',
  },
  collapsedWrapper: {
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    width: '200px',
  },
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
  },
  divider: {
    margin: '0.75rem 0 1.5rem',
  }
}));

export const Navbar = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!isOpen);
  }

  return (
    <nav className={classes.navbarWrapper}>
      <Hidden smDown>
        <div className={classes.linksWrapper}>
          <NavLink to="/" exact className={classes.links}
                   activeClassName={classes.links_active}>Головна</NavLink>
          <NavLink to="/gallery" className={classes.links} activeClassName={classes.links_active}>Галерея</NavLink>
          <NavLink to="/contacts" className={classes.links}
                   activeClassName={classes.links_active}>Контакти</NavLink>
        </div>
      </Hidden>
      <div className={classes.iconWrapper}>
        <PhotoCameraOutlinedIcon color="primary"/>
      </div>
      <Hidden smDown>
        <div className={classes.socialWrapper}>
          <Social color="secondary"/>
        </div>
      </Hidden>
      <Hidden mdUp>
        <IconButton onClick={toggleDrawer}>
          <DragHandleOutlinedIcon/>
        </IconButton>
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer} style={{background: '#f8f6f4'}}>
          <div className={classes.collapsedWrapper}>
            <PhotoCameraOutlinedIcon color="primary" style={{margin: '2rem auto'}}/>
            <nav>
              <List>
                <ListItem>
                  <NavLink to="/" exact className={classes.links}
                           activeClassName={classes.links_active}>Головна</NavLink>
                </ListItem>


                <ListItem>
                  <NavLink to="/gallery" className={classes.links}
                           activeClassName={classes.links_active}>Галерея</NavLink>
                </ListItem>

                <ListItem>
                  <NavLink to="/contacts" className={classes.links}
                           activeClassName={classes.links_active}>Контакти</NavLink>
                </ListItem>
              </List>

              <Divider className={classes.divider}/>

              <Social color="primary"/>
            </nav>
          </div>
        </Drawer>


      </Hidden>
    </nav>
  )
}
import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AuthForm} from "../components/AuthForm";
import {AuthContext} from "../context/AuthContext";
import {AddImage} from "../components/AddImage";
import {RemoveImage} from "../components/RemoveImage";
import {AppBar, Box, Button, Toolbar} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: '100vh',
    width: '100%',
    background: '#fcfcfc',
    textAlign: "center",
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",

    '& button': {
      marginRight: theme.spacing(2)
    }
  },
}))

export const AdminPage = (props) => {
  const {match, history} = props;
  const {params} = match;
  const {page} = params;
  const classes = useStyles();

  const auth = useContext(AuthContext);

  return (
    <Box className={classes.root}>
      {auth.isAuthenticated
        ?
        <>
          <AppBar position={"static"}>
            <Toolbar className={classes.heading}>
              <div>
                <Button
                  onClick={() => {
                    history.push('/admin/add')
                  }}
                >
                  Add
                </Button><Button
                onClick={() => {
                  history.push('/admin/remove')
                }}
              >
                Remove
              </Button>
              </div>
              <div>
                <Button
                  onClick={() => {
                    history.push('/')
                  }}
                >
                  HomePage
                </Button>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  onClick={auth.logout}
                >
                  LogOut
                </Button>
              </div>
            </Toolbar>
          </AppBar>
          {page === 'add' ? <AddImage/> : <RemoveImage/>}
        </>
        :
        <AuthForm/>}
    </Box>
  )
}

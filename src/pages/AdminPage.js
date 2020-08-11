import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AuthForm} from "../components/AuthForm";
import {AuthContext} from "../context/AuthContext";
import {AddImage} from "../components/AddImage";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    minHeight: '100vh'
  }
})

export const AdminPage = () => {
  const classes = useStyles();

  const auth = useContext(AuthContext);

  return (
    <div className={classes.root}>
      {
        auth.isAuthenticated ?
          <AddImage/>
          :
          <AuthForm/>
      }
    </div>
  )
}

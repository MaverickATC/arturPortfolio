import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AuthForm} from "../components/AuthForm";
import {AuthContext} from "../context/AuthContext";

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
          <button onClick={auth.logout}>logOut</button>
          :
          <AuthForm/>
      }
    </div>
  )
}

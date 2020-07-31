import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AuthForm} from "../components/AuthForm";
import {AuthContext} from "../context/AuthContext";
import {storage} from "../firebase/firebase";

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

  const [imgs, setImgs] = useState([])

  const listRef = storage.ref().child('photos/one');

  useEffect(() => {
    let im = []
    listRef.listAll().then(function (res) {

      res.items.forEach((imageRef) => {
        imageRef.getDownloadURL().then((url) => {
          im.push(url);
        })
      })
    });




    setImgs(im);
    console.log(imgs);
  }, [])


  const auth = useContext(AuthContext);

  return (
    <div className={classes.root}>
      {
        auth.isAuthenticated ?
          <>
            {imgs.map((img) => {
              return (
                <img
                  src={img}
                  width="100px"
                  height="100px"
                  alt="alter"
                  style={{margin: '2rem'}}
                />
              )
            })}
            <button onClick={auth.logout}>logOut</button>
          </>
          :
          <AuthForm/>
      }
    </div>
  )
}
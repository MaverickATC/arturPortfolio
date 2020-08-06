import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {TextField, Button, makeStyles} from '@material-ui/core';
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

const useStyle = makeStyles({
  form: {
    maxWidth: '30%',
    margin: ''
  },
  input: {
    width: '100%',
    marginTop: '.5rem',
    '& div': {
      borderRadius: "0",
    }
  },
  button: {
    margin: '2rem 20px 0 20px',
    minWidth: '100px',
    borderWidth: '1px',
    borderRadius: '0'

  }
})

export const AuthForm = () => {
  const classes = useStyle();
  const history = useHistory();
  const {register, handleSubmit, errors, formState} = useForm();

  const auth = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false)

  const {touched} = formState;

  const onSubmit = async (data) => {
    const authData = {
      ...data,
      returnSecureToken: true
    }
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfVuUl0JzAHZLTkD0qAhdsxuCxHfymdYQ', authData);

      auth.login(response.data.idToken)

      // reset({
      //   touched: false
      // });
      //
    } catch (e) {
      setIsOpen(true)
      setTimeout(() => {
        setIsOpen(false);
      }, 3000)
    }

  }

  return (
    <>
      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        open={isOpen}
        onClose={null}
        message="Wrong email or password"
      />
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextField
          variant="outlined"
          color="secondary"
          label="Email"
          name="email"
          className={classes.input}
          helperText={errors.email && "Incorrect email"}
          error={errors.email && touched.email}
          inputRef={register({
            required: true,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
        <TextField
          variant="outlined"
          color="secondary"
          label="Пароль"
          name="password"
          type="password"
          className={classes.input}
          helperText={errors.password && "Min. length: 8, A-Z, a-z, 0-9, _.,"}
          error={errors.password && touched.password}
          inputRef={register({
            required: true,
            minLength: 8,
            pattern: /^[A-Za-z\d,._]{8,}$/
          })}
        />
        <Button variant="outlined" color="primary" className={classes.button} type="submit">Вхід</Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => {
          history.push('/')
        }}>Головна</Button>
      </form>
    </>
  )
}

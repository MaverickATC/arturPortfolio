import React from 'react';
import { useForm } from 'react-hook-form'
import { TextField, Button, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    input: {
        width: '100%',
        marginTop: '.5rem',
        '& div': {
            borderRadius: "0",
        }
    },
    button: {
        marginTop: '2rem',
        minWidth: '100%',
        borderWidth: '2px',
        borderRadius: '0'
    }
})

export const Form = () => {
    const classes = useStyle();
    const { register, handleSubmit, errors, formState, reset } = useForm();

    const { touched } = formState;
    const onSubmit = data => {
        reset({
            touched: false
        });
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '2rem' }}>
            <TextField
                variant="outlined"
                color="secondary"
                label="Ваше ім'я"
                name="name"
                className={classes.input}
                helperText={errors.name && "Enter Your name"}
                error={errors.name && touched.name}
                inputRef={register({ required: true })}
            />
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
                label="Повідомлення"
                name="message"
                className={classes.input}
                multiline
                rows={5}
                rowsMax={5}
                helperText={errors.message && "Enter Your message"}
                error={errors.message && touched.message}
                inputRef={register({ required: true })}
            />
            <Button variant="outlined" color="primary" type="submit" className={classes.button}>Надіслати</Button>
        </form>
    )
}
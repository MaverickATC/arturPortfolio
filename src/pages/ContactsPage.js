import React from 'react'
import {Navbar} from '../components/Navbar'
import {makeStyles, Grid, Typography} from '@material-ui/core'
import {Form} from '../components/Form'
import bg from '../assets/bg3.jpeg';
import LocalPhoneRoundedIcon from '@material-ui/icons/LocalPhoneRounded';
import tlg from '../assets/telegram.png';
import vbr from '../assets/viber.png';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    minHeight: '100vh',
    background: '#f8f6f4',
    backgroundImage: `linear-gradient(to right, rgba(255,255,255,.85), rgba(255,255,255,.85)), url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center 78%',
    padding: '3rem 6rem',
    '@media (max-width: 959px)': {
      paddingRight: "3rem",
      paddingLeft: "3rem",
      paddingTop: '2rem',
    },
    '@media (max-width: 599px)': {
      paddingRight: "1rem",
      paddingLeft: "1rem",
      paddingTop: '1rem',
    }
  },
  phone: {
    color: theme.palette.textPrimary,
    fontSize: '1.75rem'
  },
  link: {
    textDecoration: 'none'
  },
  h_margin: {
    marginTop: '5rem',
    marginBottom: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Playfair Display',
    fontWeight: '700',
    textAlign: "center",
  },
  sub_h_margin: {
    marginTop: '1rem',
    marginBottom: '1.75rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Playfair Display',
    fontWeight: '700',
  }

}))

export const ContactsPage = () => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <Grid container justify="space-between" alignItems="center">
        <Navbar/>
        <Typography variant="h4" color="textPrimary" className={classes.h_margin}>Зв'яжіться зі мною</Typography>
        <Grid item container spacing={2} style={{paddingTop: '1rem'}}>
          <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
            <Typography variant="h6" color="textPrimary" className={classes.sub_h_margin}>Телефоном</Typography>
            <Grid container alignContent='flex-start' alignItems='flex-start' spacing={2}
                  style={{marginTop: '2.25rem'}}>
              <Grid item className={classes.phone}>
                <LocalPhoneRoundedIcon/>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="textSecondary" component="a" href="tel:+38 095 113 85 98"
                            className={classes.link}>
                  +38 095 123 45 67
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container alignContent='flex-start' alignItems='baseline' spacing={2} style={{marginTop: '1rem',}}>
              <Grid item className={classes.phone}>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <img src={vbr} alt="viber" width='24' height='24'/>
                </a>
              </Grid>
              <Grid item>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <img src={tlg} alt="telegram" width='24' height='24'/>
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
            <Typography variant="h6" color="textPrimary" className={classes.sub_h_margin}>Напишіть на пошту</Typography>
            <Form/>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}
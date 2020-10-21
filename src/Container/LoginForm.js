import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from "react-redux";
import { changeUserName, changePassword, logginSucess } from "../Action"
const style = {
  margin: 15,
};

function CopyRight() {
  return <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
      Login
      </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
}
const useStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))


export default function Login() {
  const { userName , passWord} = useSelector(state => state.loginReducer);
  const history = useHistory();
  const classes = useStyle();
  const dispatch = useDispatch()
  const afterSubmission = event => {
    event.preventDefault();
    if (userName === "hung" && passWord === "123456") {
      dispatch(logginSucess)
      history.push("/");
    }
    else {
      console.log(userName, passWord)
      console.log("loggin fail")
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={afterSubmission}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            value={userName}
            onChange={(e) => dispatch(changeUserName(e.target.value))}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={passWord}
            onChange={(e) => dispatch(changePassword(e.target.value))}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>

      </div>
      <Box mt={8}>
        <CopyRight />
      </Box>
    </Container>
  )
}

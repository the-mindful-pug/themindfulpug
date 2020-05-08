import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography } from '@material-ui/core'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

import { tokenIsValid, resetPassword } from '../lib/requests'

import LogoImg from '../images/LogoRight.png'

import ErrorMessage from './ErrorMessage'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      height: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    container: {
      display: 'flex',

      width: '966px',
      height: '655px',

      border: '1px solid #EAEAEA',
      borderRadius: '5px'
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
      width: '100%'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',

      marginBottom: '87px'
    },
    logo: {
      width: '50px',
      marginRight: '15px'
    },
    title: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#02153E'
    },
    loginContainer: {
      width: '394px'
    },
    text: {
      fontSize: '24px',
      color: '#02153E',
      textAlign: 'center'
    },
    subtext: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#A4A4A4',
      marginBottom: '38px',
      textAlign: 'center'
    },
    textInput: {
      width: '100%',
      marginBottom: '15px',
      color: '#02153E'
    },
    btn: {
      width: '100%',
      height: '50px',
      color: 'white'
    },
    icon: {
      fontSize: '10rem',
      color: '#00CF92'
    }
  })
)

const PasswordResetPage = () => {
  const classes = useStyles()

  const [show, setShow] = useState(false)
  const [cPassword, setCPassword] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [user, setUser] = useState({})
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const check = async () => {
      const url = new URL(window.location.href)
      const search = url.searchParams
      const result = await tokenIsValid(search.get('token'))
      if (result.valid) {
        setShow(true)
        setUser(result.user)
      }
    }
    check()
  }, [])

  const reset = async () => {
    const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
      password
    )
    const match = password === cPassword

    if (!isValid || !match) {
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    } else {
      await resetPassword(user, password)
      setSuccess(true)
    }
  }

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.contentContainer}>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src={LogoImg} alt="Balance Logo" />
            <Typography className={classes.title}>Balance</Typography>
          </div>
          {show ? (
            success ? (
              <>
                <Typography className={classes.text}>
                  Password Changed
                </Typography>
                <Typography className={classes.subtext}>
                  We have changed your password, you may try to login now.
                </Typography>
                <CheckCircleOutlineIcon className={classes.icon} />
              </>
            ) : (
              <div className={classes.loginContainer}>
                <Typography className={classes.text}>Reset Password</Typography>
                <Typography className={classes.subtext}>
                  Your password should contain minimum 8 characters containing
                  letters, numbers and special characters.
                </Typography>
                <TextField
                  placeholder="Enter new password"
                  variant="outlined"
                  className={classes.textInput}
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                />
                <TextField
                  placeholder="Re-enter new password"
                  variant="outlined"
                  className={classes.textInput}
                  type="password"
                  onChange={e => setCPassword(e.target.value)}
                />
                {showError ? (
                  <ErrorMessage text="Password does not meet the requirements" />
                ) : (
                  <div />
                )}
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.btn}
                  onClick={reset}
                >
                  Reset Password
                </Button>
              </div>
            )
          ) : (
            <>
              <Typography className={classes.text}>Token Expired</Typography>
              <Typography className={classes.subtext}>
                Please try to reset you password again and follow the link in
                the email.
              </Typography>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PasswordResetPage

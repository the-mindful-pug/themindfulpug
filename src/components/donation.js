import React, { useState, useEffect } from 'react'
import { css } from 'emotion'
import Modal from 'react-modal'
import { TextField } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import patron from '../images/become_a_patron_button@2x.png'
import { borderColor } from '@material-ui/system';

const animationStyle = css`
  position: relative;
`
const containerStyle = css`
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #00B49C;
  color: #fff;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const textContainerStyle = css`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;

  @media (max-width: 600px) {
    margin-bottom: 1rem;
    text-align: center;
  }
`
const titleStyle = css`
  font-size: 25px;
  padding: 0 2rem;
`
const textStyle = css`
  padding: 0 2rem;
`
const buttonContainerStyle = css`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const paypalStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const inputStyle = css`
  margin: .5rem 0;
  display: flex;
  justify-content: center;
`
const donateStyle = css`
  width: 10.832rem;
  padding: .6rem;
  text-align: center;

  background-color: #2f4858;
  cursor: pointer;
`
const orContainerStyle = css`
  display: flex;
  justify-content: center;
`
const orStyle = css`
  width: 12rem;
  text-align: center;
  padding: .5rem 0;
`
const patreonStyle = css`
  display: flex;
  justify-content: center;
`
const dollarSignStyle = css`
  padding-top: 1.28rem;
  padding-right: .2rem;
`
const closeIcon = css`
  color: #fff;
  position: absolute;
  top: 1rem;
  right: 1rem;
`

const customStyles = {
  overlay: {
    backgroundColor: 'rgb(0,0,0,.5)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff'
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: "#fff"
      }
    },
    MuiInput: {
      input: {
        color: '#fff',
      },
      underline: {
        borderBottom: '1px solid #fff',
        '&:before': {
          borderBottom: '1px solid #fff'
        }
      }
    }
  }
})

const Donation = ({ closeDonation }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [value, setValue] = useState(10)
  const [close, setClose] = useState(false)

  const validateDonation = e => {
    const newValue = e.target.value
    const lastChar = newValue.charAt((newValue.length - 1) || 0)
    const lastCharNum = +lastChar
    !isNaN(lastCharNum) && setValue(newValue)
  }

  const open = async () => {
    await setModalOpen(true)
    const oldButtons = window.document.querySelector('#paypal-button-container')
    oldButtons.innerHTML = ''
    const buttons = window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: `${value}.00`
            }
          }]
        })
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then(details => {
          console.log(details.payer.name.given_name, ':', value)
        })
      }
    })
    buttons.render('#paypal-button-container')
  }

  return (
    <div className={animationStyle}>
      <CloseIcon className={closeIcon} onClick={() => {
        // setClose(true)
        // wait for animation
        // setTimeout(closeDonation, 2000)
        closeDonation()
      }} />
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Contact Us"
        style={customStyles}
      >
        <div id='paypal-button-container'></div>
      </Modal>
      <div className={containerStyle}>
        <div className={textContainerStyle}>
          <div className={titleStyle}>Help us keep the lights on!</div>
          <div className={textStyle}>If you like what we do please help us continue to do it!</div>
        </div>
        <div className={buttonContainerStyle}>
          <div className={paypalStyle}>
            <div className={inputStyle}>
              <div className={dollarSignStyle}>$</div>
              <MuiThemeProvider theme={theme}>
                <TextField
                  label="Donation"
                  value={value}
                  onChange={validateDonation}
                />
              </MuiThemeProvider>
            </div>
            <div className={orContainerStyle}>
              <div className={donateStyle} onClick={open}>Donate</div>
            </div>
          </div>
          <div className={orContainerStyle}>
            <div className={orStyle}>- or -</div>
          </div>
          <div className={patreonStyle}>
            <a href="https://www.patreon.com/bePatron?u=27987489">
              <img src={patron} alt='Become a patron' style={{ width: '12rem' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation
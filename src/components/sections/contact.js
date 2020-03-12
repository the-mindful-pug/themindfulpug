import React, { useState } from 'react'
import { cx, css } from 'emotion'
import Modal from 'react-modal'
import { TextField } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

export const contactStyleOverride = {
  sectionContainerO: css`
    padding: 3rem 4rem;

    @media (min-width: 600px) {
      padding-top: 10rem;
    }
  `
}

const contactContainerStyle = css`
  display: flex;
  justify-content: center;

  @media (min-width: 600px) {
    padding: 2.5rem;
  }
`

const contactButtonStyle = css`
  background-color: #00cf92;
  border-radius: 3px;
  margin-bottom: 2rem;
  padding: 0.5rem 2rem;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.0619051px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: #00b49c;
  }

  @media (max-width: 600px) {
    font-size: 20px;
    padding: 1.4rem 3rem;
    margin-top: 2rem;
  }
`

const modalContainer = css`
  display: flex;
  flex-direction: column;
  font-family: Poppins;
  text-align: center;

  @media (min-width: 600px) {
    width: 400px;
  }
`
const modalTitleStyle = css`
  margin: 0.5rem;
`
const modalButton = css`
  margin: 1rem 0.5rem;
`

const ContactComponent = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

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
        main: '#00B49C'
      }
    }
  })

  const click = async (name, email, message) => {
    if (name && email && message) {
      try {
        await fetch('https://mylifechart-server.herokuapp.com/contact', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            message
          })
        })
      } catch (e) {
        console.error(e)
      }
    }
    setModalOpen(false)
  }

  return (
    <div className={contactContainerStyle}>
      <div className={contactButtonStyle} onClick={() => setModalOpen(true)}>
        Contact Us
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Contact Us"
        style={customStyles}
      >
        <MuiThemeProvider theme={theme}>
          <div className={modalContainer}>
            <div className={modalTitleStyle}>Contact Us</div>
            <TextField
              id="outlined-name-static"
              required
              onChange={e => setName(e.target.value)}
              label="Name"
              placeholder="Name"
              underlineFocusStyle={{ borderColor: '#00CF92 !important' }}
              style={{ margin: '.5rem' }}
            />
            <TextField
              id="outlined-email-static"
              required
              type="email"
              onChange={e => setEmail(e.target.value)}
              label="Email"
              placeholder="Email"
              style={{ margin: '.5rem' }}
            />
            <TextField
              id="outlined-multiline-static"
              required
              multiline
              onChange={e => setMessage(e.target.value)}
              label="Message"
              placeholder="Message"
              style={{ margin: '.5rem' }}
            />
            <div
              className={cx(contactButtonStyle, modalButton)}
              onClick={() => click(name, email, message)}
            >
              Send
            </div>
          </div>
        </MuiThemeProvider>
      </Modal>
    </div>
  )
}

export default ContactComponent

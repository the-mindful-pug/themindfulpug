import React, { useState } from 'react'
import { css, keyframes } from 'emotion'

import logoImage from '../../images/themindfulpug/tmp_logo.png'
import heroImage from '../../images/themindfulpug/tmp_header.png'
import aboutImage from '../../images/themindfulpug/tmp_about.png'
import contactImage from '../../images/themindfulpug/tmp_contact.png'
import contactMobileImage from '../../images/themindfulpug/tmp_contact_mobile.png'
import hamburgerButtonImage from '../../images/themindfulpug/hamburger.png'

type Props = {
  isMobile: boolean
}

const outerContainer = css`
  display: flex;
  justify-content: center;
`
const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;

  p {
    color: #2f4858;
    font-family: Poppins, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, san-serif;
    margin: 0;
  }

  a {
    color: #2f4858;
    outline: none;
    text-decoration: none;

    @media only screen and (max-width: 768px) {
      text-align: center;
      margin-bottom: 0.5rem;
    }
  }
`
const header = css`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 768px) {
    margin-bottom: 70px;
  }
`
const hero = css`
  position: relative;
  height: 700px;
  margin-bottom: 100px;

  @media only screen and (max-width: 768px) {
    height: 27rem;
  }
`
const about = css`
  display: flex;
  margin-bottom: 100px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5rem;
  }
`
const contact = css`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  @media only screen and (min-width: 768px) {
    height: 600px;
    margin-bottom: 100px;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`
const footer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`
const headerLogo = css`
  flex-grow: 1;
`
const headerImageStyle = css`
  @media only screen and (max-width: 768px) {
    width: 60%;
    flex-grow: 0;
    padding: 1rem;
  }
`
const navigation = css`
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  height: 40px;
  background-color: #00cf92;
  color: #fff;
  text-align: center;
  border-radius: 3px;
`
const heroTitle = css`
  width: 485px;
  font-size: 50px;
  line-height: 66px;
  padding: 85px 0 0 50px;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    width: 100%;
    padding: 0 2rem;
    box-sizing: border-box;
  }
`
const heroText = css`
  width: 360px;
  font-size: 20px;
  line-height: 32px;
  padding: 10px 0 0 50px;

  @media only screen and (max-width: 768px) {
    width: 80%;
    font-size: 18px;
    line-height: 25px;
    padding: 1rem 0 0 2rem;
    box-sizing: border-box;
  }
`
const heroImageStyle = css`
  position: absolute;
  width: 100%;
  top: 10rem;

  @media only screen and (min-width: 768px) {
    width: 870px;
    right: 0;
    top: 0;
  }
`
const aboutText = css`
  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`
const aboutImageStyle = css`
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`
const half = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  boz-sizing: border-box;
`
const sectionTitle = css`
  width: 100%;
  font-weight: 600;
  font-size: 32px;
`
const contactImageStyle = css`
  position: absolute;
  top: 50px;
  right: 0;
`
const contactImageStyleMobile = css`
  width: 100%;
`
const form = css`
  width: 300px;
  margin: 150px 100px;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    margin: 0;
  }
`
const input = css`
  box-sizing: border-box;
  border: 1px solid #2f4858;
  border-radius: 3px;
  padding: 10px;
  width: 300px;
  outline-color: #00cf92;
  font-size: 16px;
  font-family: Poppins, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, san-serif;
  margin-bottom: 15px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const menuButton = css`
  width: 2rem;
  padding: 1rem;
`
const grow = keyframes`
  from {
    height: 0;
  }
  to {
    height: 140px;
  }
`
const shrink = keyframes`
  from {
    height: 140px;
  }
  to {
    height: 0;
  }
`
const menu = css`
  position: absolute;
  right: 0;
  padding: 1rem;
  z-index: 1000;
  background-color: #fff;
  border: 1px solid #2f4858;
  border-radius 3px;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  width: 165px;
  animation: ${grow} 1s;
  animation-fill-mode: forwards;
`

const TheMindfulPug = ({ isMobile }: Props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [errors, setErrors] = useState([false, false, false])
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errors = [false, false, false]
    setErrors(errors)
    if (!name) errors[0] = true
    if (!email || !email.includes('@')) errors[1] = true
    if (!message) errors[2] = true
    setErrors(errors)
    return !errors[0] && !errors[1] && !errors[2]
  }

  const submit = async () => {
    setLoading(true)
    const isValid = validate()
    if (isValid) {
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
      } catch (e) {}
    }
    setLoading(false)
  }

  return (
    <div className={outerContainer}>
      <div className={container}>
        <div className={header}>
          <div className={headerLogo}>
            <img className={headerImageStyle} src={logoImage} alt="" />
          </div>
          {isMobile ? (
            <div
              onClick={() => {
                setMenuOpen(!menuOpen)
                setAnimating(true)
                setTimeout(() => setAnimating(false), 1000)
              }}
            >
              <img className={menuButton} src={hamburgerButtonImage} alt="" />
              {menuOpen && (
                <div className={menu}>
                  {!animating && (
                    <>
                      <a href="#about" onClick={() => setMenuOpen(false)}>
                        About
                      </a>
                      <a href="#contact" onClick={() => setMenuOpen(false)}>
                        Contact
                      </a>
                      <a
                        href="mailto:josh@themindfulpug.com"
                        onClick={() => setMenuOpen(false)}
                      >
                        Careers
                      </a>
                      <div className={button}>
                        <a
                          href="/balance"
                          style={{ color: '#fff', marginBottom: 0 }}
                          onClick={() => setMenuOpen(false)}
                        >
                          Products
                        </a>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className={navigation}>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="mailto:josh@themindfulpug.com">Careers</a>
              <div className={button}>
                <a href="/balance" style={{ color: '#fff' }}>
                  Products
                </a>
              </div>
            </div>
          )}
        </div>
        <div className={hero}>
          <img className={heroImageStyle} src={heroImage} alt="" />
          <p className={heroTitle}>Tools for health and peace of mind</p>
          <p className={heroText}>Mental health and addiction recovery.</p>
        </div>
        <a id="about"></a>
        <div className={about}>
          {isMobile && (
            <p
              className={sectionTitle}
              style={{ marginBottom: '3rem', textAlign: 'center' }}
            >
              About
            </p>
          )}
          <div className={half}>
            <img className={aboutImageStyle} src={aboutImage} alt="" />
          </div>
          <div className={half} style={{ padding: isMobile ? '0' : '0 75px' }}>
            {!isMobile && (
              <p className={sectionTitle} style={{ marginBottom: '20px' }}>
                About
              </p>
            )}
            <p className={aboutText}>
            The Mindful Pug is a company that provides tools to enhance and facilitate the recovery of those with addictions and mental health disorders. As of 2016, there were more than 46 million people in the United States who suffer from mental illness and/or addictions. Of those 46 million only a fraction receive treatment. Although mental health is becoming more widely accepted as a subject of conversation, it is still hard for those who struggle to find the help they need. With the tools provided by The Mindful Pug, clinicians can be better connected to their clients and clients will have access to resources that will help them deal with their disorder(s).
            </p>
            <p className={aboutText} style={{ marginTop: '10px' }}>
            The Mindful Pug was founded by Josh Greenwell following his initial steps in recovery for alcohol abuse. When he was first seeking help for his addiction, he found it difficult to access the help he needed; consequently, the search for peace continued for almost a year. While in treatment Josh was inspired to create resources that would help him in his recovery journey. Realizing the value of his discoveries, he shared those with others who struggled as he had. Thus, The Mindful Pug was born. Since then he has been driven to offer new solutions to the continually growing needs in our mental health and addiction recovery programs.
            </p>
          </div>
        </div>
        <a id="contact"></a>
        <div className={contact}>
          {!isMobile && (
            <img className={contactImageStyle} src={contactImage} alt="" />
          )}
          <p className={sectionTitle} style={{ textAlign: 'center' }}>
            Contact Us
          </p>
          {isMobile && (
            <img
              className={contactImageStyleMobile}
              src={contactMobileImage}
              alt=""
            />
          )}
          <div className={form}>
            <input
              className={input}
              placeholder="Name"
              style={{ borderColor: errors[0] ? '#eb4034' : '#2F4858' }}
              onChange={e => setName(e.target.value)}
            />
            <input
              className={input}
              placeholder="Email"
              style={{ borderColor: errors[1] ? '#eb4034' : '#2F4858' }}
              onChange={e => setEmail(e.target.value)}
            />
            <textarea
              rows={3}
              className={input}
              placeholder="Message"
              style={{
                resize: 'none',
                borderColor: errors[2] ? '#eb4034' : '#2F4858'
              }}
              onChange={e => setMessage(e.target.value)}
            />
            <div
              className={button}
              style={{ cursor: 'pointer', height: '50px' }}
              onClick={submit}
            >
              <p style={{ color: '#fff' }}>
                {loading ? 'Sending...' : 'Send Message'}
              </p>
            </div>
          </div>
        </div>
        <div className={footer}>
          <img width="200px" src={logoImage} alt="" />
          <p style={{ textAlign: 'center' }}>
            ©2019 The Mindful Pug LLC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TheMindfulPug

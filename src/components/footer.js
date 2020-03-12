import React from 'react'
import { css } from 'emotion'

import logoImg from '../images/logo.png'

const footerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;

  @media (min-width: 600px) {
    padding: 1.3rem 15%;
  }
`

const footerIconContainer = css`
  display: flex;
`
const footerIcon = css`
  height: 1.8rem;
`
const footerAppName = css`
  margin-left: 0.6rem;
`
const footerCopyright = css`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.133333px;
`

const Footer = ({ content = {} }) => {
  const { copyright } = content
  return (
    <div className={footerContainer}>
      <div className={footerIconContainer}>
        <img src={logoImg} className={footerIcon} alt='Balance' />
        <div className={footerAppName}>Balance</div>
      </div>
      <div className={footerCopyright}>{copyright}</div>
    </div>
  )
}

export default Footer

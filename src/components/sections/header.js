import React from 'react'
import { css } from 'emotion'

import googleStoreImg from '../../images/app-badge/google-play.png'
import appleStoreImg from '../../images/app-badge/app-store.png'
import deviceImg from '../../images/header-image.png'
import logoImg from '../../images/logo.png'

const containerStyle = css`
  width: 100%;
  margin: auto;

  @media (min-width: 600px) {
    max-width: 1000px;
  }
`
const logoContainerStyle = css`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: center;
  }
`
const logoStyle = css`
  height: 2.7rem;
`
const appTextStyle = css`
  margin-left: 1rem;
  font-weight: bold;
  font-size: 30px;
  line-height: 22px;
  letter-spacing: 0.333333px;
`
const contentContainerStyle = css`
  @media (min-width: 600px) {
    display: flex;
  }
`
const textStyle = css`
  text-align: center;
  padding-top: 3rem;

  @media (min-width: 600px) {
    width: 100%;
    padding-top: 7rem;
  }
`
const titleStyle = css`
  font-weight: 300;
  font-size: 50px;
  line-height: 66px;
  letter-spacing: 0.555556px;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 600px) {
    max-width: 400px;
  }
`
const subTitleStyle = css`
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.222222px;

  @media (max-width: 600px) {
    padding-top: 1rem;
  }
  @media (min-width: 600px) {
    max-width: 400px;
  }
`
const storeStyle = css`
  margin-top: 4rem;
  @media (min-width: 600px) {
    max-width: 400px;
  }
`
const googleStyle = css`
  width: 16rem;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 600px) {
    width: 10rem;
    margin-right: 2rem;
  }
`
const appleStyle = css`
  width: 16rem;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 600px) {
    width: 10rem;
  }
`
const deviceContainerStyle = css`
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    width: 100%;
  }
`
const deviceStyle = css`
  max-width: 90%;

  @media (min-width: 600px) {
    max-width: 400px;
  }
`

const HeaderComponent = ({ content, isMobile }) => {
  const { title, subTitle } = content
  return (
    <div className={containerStyle}>
      <div className={logoContainerStyle}>
        <img src={logoImg} className={logoStyle} alt="Balance" />
        <span className={appTextStyle}>Balance</span>
      </div>
      <div className={contentContainerStyle}>
        <div className={textStyle}>
          <h1 className={titleStyle}>{title}</h1>
          <div className={subTitleStyle}>{subTitle}</div>
          <div className={storeStyle}>
            <img
              src={googleStoreImg}
              className={googleStyle}
              onClick={() =>
                (window.location =
                  'https://play.google.com/store/apps/details?id=com.themindfulpug.balance')
              }
              alt="Google Play Store"
            />
            <img
              src={appleStoreImg}
              className={appleStyle}
              onClick={() =>
                (window.location =
                  'https://apps.apple.com/us/app/balance-recovery/id1488287650?ls=1')
              }
              alt="Apple App Store"
            />
          </div>
        </div>
        {!isMobile ? (
          <div className={deviceContainerStyle}>
            <img
              src={deviceImg}
              className={deviceStyle}
              alt="Balance Example"
            />
          </div>
        ) : (
          <div style={{ marginBottom: '2rem' }} />
        )}
      </div>
    </div>
  )
}

export default HeaderComponent

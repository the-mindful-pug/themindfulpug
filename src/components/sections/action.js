import React from 'react'
import { css } from 'emotion'

import googleStoreImg from '../../images/app-badge/google-play.png'
import appleStoreImg from '../../images/app-badge/app-store.png'

export const actionStyleOverride = {
  sectionContainerO: css`
    @media (min-width: 600px) {
      padding: 7rem 0;
    }
  `
}

const containerStyle = css`
  margin: auto;
  color: #ffffff;

  @media (min-width: 600px) {
    max-width: 1000px;
  }
`
const contentContainerStyle = css`
  display: flex;

  @media (max-width: 600px) {
    padding: 3rem 0;
    text-align: center;
  }
`
const textStyle = css`
  width: 100%;
`
const titleStyle = css`
  font-weight: 600;
  font-size: 28px;
  line-height: 48px;
  letter-spacing: 0.355556px;

  @media (min-width: 600px) {
    max-width: 400px;
  }
`
const subTitleStyle = css`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.222222px;

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

const ActionComponent = ({ content }) => {
  const { title, subTitle } = content
  return (
    <div className={containerStyle}>
      <div className={contentContainerStyle}>
        <div className={textStyle}>
          <div className={titleStyle}>{title}</div>
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
      </div>
    </div>
  )
}

export default ActionComponent

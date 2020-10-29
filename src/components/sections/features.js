import React from 'react'
import { css } from 'emotion'

import featureImg from '../../images/feature-image.png'

const contentContainerStyle = css`
  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }
`
const deviceContainerStyle = css`
  display: flex;
  justify-content: flex-end;

  @media (min-width: 600px) {
    width: 100%;
    margin-right: 5rem;
  }
`
const inverseDeviceContainerStyle = css`
  display: flex;
  justify-content: flex-start;

  @media (min-width: 600px) {
    width: 100%;
    margin-left: 5rem;
  }
`
const deviceStyle = css`
  @media (min-width: 600px) {
    max-width: 400px;
  }
`
const textStyle = css`
  @media (min-width: 600px) {
    width: 100%;
    margin-left: 5rem;
    margin-top: 4rem;
  }
`
const inverseTextStyle = css`
  @media (min-width: 600px) {
    width: 100%;
    margin-right: 5rem;
    margin-top: 4rem;
    justify-content: flex-end;
  }
`
const featureStyle = css`
  box-shadow: 0px 2px 9px rgba(197, 197, 197, 0.6);
  background-color: #ffffff;
  padding: 1.6rem;
  margin: 2rem 0;

  @media (min-width: 600px) {
    width: 450px;
  }
`
const titleStyle = css`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`
const ftTextStyle = css``

const FeatureComponent = ({ isMobile, inverse = false }) => {
  const features = inverse ? [
    {
      title: 'View Balance Categories',
      text:
        'Balance offers insight into 11 main categories of day to day life with tips and descriptions to keep you living your best life.'
    },
    {
      title: 'Track Your Thoughts',
      text:
        'Journaling is an awesome way to track thoughts in the moment and reflect on them later. It also helps you vent your stress in a safe and intimate way.'
    },
    {
      title: 'Opt In to Spirit Cards',
      text:
        'Spirit Cards are a fun and interesting way of daily self reflection. They can also offer daily actions, like "be creative" or "set healthy boundries".'
    }
  ] : [
    {
      title: 'View Balance Categories',
      text:
        'Balance offers insight into 11 main categories of day to day life with tips and descriptions to keep you living your best life.'
    },
    {
      title: 'Track Your Thoughts',
      text:
        'Journaling is an awesome way to track thoughts in the moment and reflect on them later. It also helps you vent your stress in a safe and intimate way.'
    },
    {
      title: 'Opt In to Spirit Cards',
      text:
        'Spirit Cards are a fun and interesting way of daily self reflection. They can also offer daily actions, like "be creative" or "set healthy boundries".'
    }
  ]

  const getFeature = ({ title, text }, i) => (
    <div key={i} className={featureStyle}>
      <div className={titleStyle}>{title}</div>
      <div className={ftTextStyle}>{text}</div>
    </div>
  )

  const imgComponent = !isMobile ? (
    <div className={inverse ? inverseDeviceContainerStyle : deviceContainerStyle}>
      <img src={featureImg} className={deviceStyle} alt='' style={inverse ? { transform: 'scaleX(-1)' } : {}} />
    </div>
  ) : (
    <div />
  )

  return (
    <div className={contentContainerStyle}>
      {!inverse && imgComponent}
      <div className={inverse ? inverseTextStyle : textStyle}>
        {features.map((el, i) => getFeature(el, i))}
      </div>
      {inverse && imgComponent}
    </div>
  )
}

export default FeatureComponent

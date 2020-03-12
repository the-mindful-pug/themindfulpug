import React from 'react'
import { css } from 'emotion'

const container = css`
  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    margin: 4rem 0 15rem 0;
  }
`
const tile = css`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  margin: 2rem 0;

  @media (min-width: 600px) {
    margin: 20px;
    width: 235px;
  }

  text-align: center;

  box-shadow: 0px 2px 9px rgba(197, 197, 197, 0.6);
`
const releaseDateStyle = css`
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 800;
  margin-top: 2rem;
`
const nameStyle = css`
  font-size: 1.1rem;
  font-weight: 800;
`
const descriptionStyle = css`
  margin-top: 1.7rem;
`

const FutureComponent = () => {
  const features = [
    {
      icon: 'chart-bar',
      release: 'Early 2020',
      name: 'Balance Chart',
      description:
        'Choose a portion of your week to dedicate to each category.',
      color: '#00CF92'
    },
    {
      icon: 'paw',
      release: 'Early 2020',
      name: 'Spirit Cards',
      description:
        'Enter spirit cards into your thoughts section and look at them over time.',
      color: '#00B49C'
    },
    {
      icon: 'comments',
      release: 'Early 2020',
      name: 'Suggestions',
      description:
        'Using AI, Balance will make suggestions to help you balance your life.',
      color: '#00999A'
    },
    {
      icon: 'user',
      release: 'Early 2020',
      name: 'Accounts',
      description:
        'Sign up to Balance to backup your data and view it from any device',
      color: '#007D8D'
    }
  ]

  const getFeature = ({ icon, release, name, description, color }, i) => (
    <div key={i} className={tile}>
      <i className={`fas fa-${icon}`} style={{ color, fontSize: '2.5rem' }}></i>
      <div className={releaseDateStyle}>{release}</div>
      <div className={nameStyle}>{name}</div>
      <div className={descriptionStyle}>{description}</div>
    </div>
  )

  return (
    <div className={container}>
      {features.map((el, i) => getFeature(el, i))}
    </div>
  )
}

export default FutureComponent

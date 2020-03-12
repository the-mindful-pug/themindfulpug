import React from 'react'
import { css } from 'emotion'

const sectionContainer = css`
  padding-top: 6rem;

  @media (max-width: 600px) {
    padding: 3rem 2rem 0 2rem;
  }
`

const headerTitle = css`
  font-weight: 600;
  font-size: 28px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 0.355556px;
`

const headerSubTitle = css`
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.222222px;

  max-width: 700px;
  margin: auto;
`

const Section = ({
  background = '#ffffff',
  component,
  content = {},
  override,
  styleOverride = {}
}) => {
  const { title, subTitle } = content
  const { sectionContainerO, headerTitleO, headerSubTitleO } = styleOverride

  const containerStyle = sectionContainerO
    ? sectionContainerO
    : sectionContainer
  const titleStyle = headerTitleO ? headerTitleO : headerTitle
  const subTitleStyle = headerSubTitleO ? headerSubTitleO : headerSubTitle

  return (
    <div className={containerStyle} style={{ background }}>
      {override ? (
        override
      ) : (
        <>
          <div className={titleStyle}>{title}</div>
          <div className={subTitleStyle}>{subTitle}</div>
          {component}
        </>
      )}
    </div>
  )
}

export default Section

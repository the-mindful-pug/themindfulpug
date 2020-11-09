import React from 'react'
import { css } from 'emotion'

const container = css`
  display: flex;
  flex-direction: column;

  margin: 3rem 0;
`
const row = css`
  justify-content: center;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
  }
`
const tile = css`
  text-align: center;
  margin-top: 3rem;

  @media (min-width: 600px) {
    width: 275px;
    margin: 3rem;
  }
`
const sectionHeader = css`
  font-size: 1.1rem;
  font-weight: 800;
`
const sectionText = css``

const AboutComponent = () => {
  const content = {
    section1: {
      header: 'Mental Health',
      text:
        'Balance helps to impove how we handle stress, relate to others, and make choices through its features.'
    },
    section2: {
      header: 'Therapy',
      text:
        'Balance has the ability to connect with clinicians which allows them to view journal entries and more.'
    },
    section3: {
      header: 'Mindfulness',
      text:
        'Balance keeps you engaged in the moment by surfacing tools in an appealing way'
    },
    section4: {
      header: 'Addiction Recovery',
      text:
        'Having good tools to combat urges, life events, and more is key to recovery and Balance gives you those tools'
    }
  }

  return (
    <div className={container}>
      <div className={row}>
        <div className={tile}>
          <div className={sectionHeader}>{content.section1.header}</div>
          <div className={sectionText}>{content.section1.text}</div>
        </div>
        <div className={tile}>
          <div className={sectionHeader}>{content.section2.header}</div>
          <div className={sectionText}>{content.section2.text}</div>
        </div>
      </div>
      <div className={row}>
        <div className={tile}>
          <div className={sectionHeader}>{content.section3.header}</div>
          <div className={sectionText}>{content.section3.text}</div>
        </div>
        <div className={tile}>
          <div className={sectionHeader}>{content.section4.header}</div>
          <div className={sectionText}>{content.section4.text}</div>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent

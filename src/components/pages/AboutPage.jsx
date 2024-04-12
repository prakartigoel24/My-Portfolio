import React from 'react'
import SubpageHero from '../SubpageHero';

const AboutPage = () => {
  return (
    <main>
      <SubpageHero
      heading={"About Me"}
      subheading={"Get to know more about me."}
      backgroundImg={'bg-prism-spiral'}
      btnText={'Contact Me'}
      btnLink={'/contact'}/>
    </main>
  )
}

export default AboutPage
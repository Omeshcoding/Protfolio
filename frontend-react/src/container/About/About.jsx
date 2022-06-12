import React from 'react'
import { motion} from 'framer-motion'
import './About.scss';


cosnt abouts = [
  { title: 'Web Development', description: 'I am a good web developer', imgUrl: '' }
  { title: 'Web Development', description: 'I am a good web developer', imgUrl: '' }
  { title: 'Web Development', description: 'I am a good web developer', imgUrl: '' }
  { title: 'Web Development', description: 'I am a good web developer', imgUrl: '' }
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I Know that
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
      
      </div>
    </>
    )
}

export default About
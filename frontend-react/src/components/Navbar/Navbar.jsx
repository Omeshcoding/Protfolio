import React ,{ useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Navbar.scss';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo"/>
      </div> 
      <ul className='app__navbar-links'>
        {['home','about','work','skills','contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}> {item} </a>
          </li>

        ))}
      </ul>
      <div className='app__navbar-menu'>
        {/*Adding a callback function for toggle menu 
      using the state , true so we can open it */}
        <HiMenuAlt4 onClick={() => setToggle(true)}/>
       {/* if toggle is true than we render, 
      dynamic code block*/}
         
        {toggle && (
            <motion.div
            whileInView={{ x: [300, 0] }}
            transition ={ {duration: 0.85, ease: 'easeOut'}}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
              <li key={item}>
              
              <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
              </li>
              
              ))}
              </ul> 
            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import './Testimonial.scss';
import { urlFor, client} from '../../client';
import { AppWrap , MotionWrap } from '../../wrapper';


const Testimonial = () => {

  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effects hook
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';



    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
    })

    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
    })
  }, [])
  

  return (
    <>
    {testimonials.length &&}
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonials"),
  'testimonials',
  "app__proimarybg"
);
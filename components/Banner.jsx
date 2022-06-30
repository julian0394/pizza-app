import React from 'react';
// Styles
import styles from '../styles/banner.module.css';
// Images
import bannerImg from '../public/img/Banner-img.png';
// Components
import Image from 'next/image';

const Slider = () => {

  return (
    <div className={styles.containter}>      
      <Image 
        className='fotito' 
        src={bannerImg}
        alt="Banner image" 
        height="880" 
        width="1920" 
      />
    </div>
  )
}

export default Slider;
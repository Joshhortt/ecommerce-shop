import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';


const FooterBanner = () => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
        <p>{FooterBanner.discount}</p>
        <h3>{FooterBanner.largeText1}</h3>
        <h3>{FooterBanner.largeText2}</h3>
        </div>
        
        <div className='right'>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
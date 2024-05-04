import React from 'react';
import './loader.css'
import { RingLoader } from 'react-spinners';

const Loaderr = () => {
  return (
    <div className='loaderr'>
      <RingLoader className='ringloader' />
    </div>
  )
}

export default Loaderr

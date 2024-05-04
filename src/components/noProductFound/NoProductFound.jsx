import React from 'react';
import noProductImage from '../../assets/images/no-product-found.png';

const NoProductFound = () => {
  return (
    <div>
        <div>
            <img src={noProductImage} alt='no-products-found' className='w-100'/>
        </div>
     <h2>We are Sorry...The Item you are Searching is currently not available</h2>
      
    </div>
  )
}

export default NoProductFound

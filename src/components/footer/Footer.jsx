import React from 'react'
import './footer.css';
import { Copyright} from "lucide-react";

const Footer = () => {
  return (
    <section id='footer' className='mt-5'>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-4'>
                <h1>Free Shop</h1>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint distinctio iusto consequuntur, ex quod.</p>
                </div>                
            </div>
            <div className='col-md-4'>
                <h2>Quick links</h2>
                <div className='links-container'>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Orders</li>
                    <li>Contact us</li>
                    <li>Logout</li>
                </ul>
                </div>
            </div>
            <div className='col-md-4'>
               
            </div>
            <div className='col footer-copyright'>
                <span><Copyright /> 2024 Copyright: Adil</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

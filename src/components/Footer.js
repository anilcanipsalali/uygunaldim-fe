import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'
import newsletter from '../images/newsletter.png'
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  100.Yıl mahallesi <br />
                  Ugur Mumcu Cad <br />B blok
                </address>
                <a
                  href='tel:+91 8264954234'
                  className='mt-3 d-block mb-1 text-white'
                >
                  +91 8264954234
                </a>
                <a
                  href='mailto:burakhangulseven@gmail.com'
                  className='mt-2 d-block mb-0 text-white'
                >
                  burakhangulseven@gmail.com
                </a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href='#'>
                    <BsGithub className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to='/privacy-policy' className='text-white py-2 mb-1'>
                  Privacy Policy
                </Link>

                <Link to='/term-conditions' className='text-white py-2 mb-1'>
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}; uygunaldim
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Bize Ulaşın</h4>
              <div>
                <address className='text-white fs-6'>
                Üsküdar Üniversitesi Merkez Yerleşke <br />
                Altunizade, Üniversite Sok. <br />
                No:14, 34662 <br/>
                Üsküdar/İstanbul
                </address>
                <a
                  href='tel:+91 8264954234'
                  className='mt-3 d-block mb-1 text-white'
                >
                  +91 8264954234
                </a>
                <a
                  href='mailto:uygunaldim@musterihizmetleri.com'
                  className='mt-2 d-block mb-0 text-white'
                >
                  uygunaldim@musterihizmetleri.com
                </a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href='https://github.com/anilcanipsalali'>
                    <BsGithub className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Bilgi</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to='/privacy-policy' className='text-white py-2 mb-1'>
                  Gizlilik Politikası
                </Link>

                <Link to='/term-conditions' className='text-white py-2 mb-1'>
                  Şartlar ve Koşullar
                </Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Hesap</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Hakkımızda</Link>
                <Link className='text-white py-2 mb-1'>Sıkça Sorulan Sorular</Link>
                <Link className='text-white py-2 mb-1'>İletişim</Link>
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
                &copy; {new Date().getFullYear()} - uygunaldim
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

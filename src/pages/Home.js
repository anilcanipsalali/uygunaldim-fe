import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import ProductCard from '../components/ProductCard'
import Container from '../components/Container'

const Home = () => {
  return (
    <>
      <Container class1='home-wrapper-1 py-5'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
              <img
                src='images/main-banner-1.jpg'
                className='img-fluid rounded-3'
                alt='main banner'
              />
              <div className='main-banner-content position-absolute'>
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner-01.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Best Sake</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img
                  src='images/catbanner-02.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img
                  src='images/catbanner-03.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img
                  src='images/catbanner-04.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='featured-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Öne Çıkan Koleksiyon</h3>
          </div>
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1='popular-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>6 Ayın En Ucuzları</h3>
          </div>
        </div>
        <div className='row'>
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1='marque-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='images/brand-01.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-07.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-08.png' alt='brand' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home

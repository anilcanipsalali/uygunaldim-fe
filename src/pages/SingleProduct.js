import React from 'react'
import ReactStars from 'react-rating-stars-component'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactImageZoom from 'react-image-zoom'
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'

import Container from '../components/Container'

const SingleProduct = () => {

  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg',
  }

  return (
    <>
      <Meta title={'Product Name'} />
      <BreadCrumb title='Product Name' />
      <Container class1='main-product-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-product-image'>
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='main-product-details'>
              <div className='border-bottom'>
                <h3 className='title'>
                  Kids Headphones Bulk 10 Pack Multi Colored For Students
                </h3>
              </div>
              <div className='border-bottom py-3'>
                <p className='price'>$ 100</p>
                <div className='d-flex align-items-center gap-10'>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor='#ffd700'
                  />
                  <p className='mb-0 t-review'>( 2 Değerlendirme )</p>
                </div>
                <a className='review-btn' href='#review'>
                  Ürünü Değerlendir
                </a>
              </div>
              <div className=' py-3'>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Marka :</h3>
                  <p className='product-data'>Havells</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Kategori :</h3>
                  <p className='product-data'>Watch</p>
                </div>
                <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                  <div className='d-flex align-items-center'>
                    <button className='button signup'>
                      En Uygun Ürüne Git
                    </button>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <span>
                      <TbGitCompare className='fs-5 me-2' /> Karşılaştırmaya Ekle
                    </span>
                  </div>
                  <div>
                    <span>
                      <AiOutlineHeart className='fs-5 me-2' /> Takip Listeme Ekle
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='reviews-wrapper home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 id='review'>Değerlendirmeler</h3>
            <div className='review-inner-wrapper'>
              <div className='review-form py-4'>
                <h4>Ürünü Değerlendir</h4>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor='#ffd700'
                    />
                  </div>
                  <div>
                    <textarea
                      name=''
                      id=''
                      className='w-100 form-control'
                      cols='30'
                      rows='4'
                      placeholder='Değerlendirmeniz'
                    ></textarea>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button className='button border-0'>Paylaş</button>
                  </div>
                </form>
              </div>
              <div className='reviews mt-4'>
                <div className='review'>
                  <div className='d-flex gap-10 align-items-center'>
                    <h6 className='mb-0'>anilcanipsalali</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor='#ffd700'
                    />
                  </div>
                  <p className='mt-3'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur fugit ut excepturi quos. Id reprehenderit
                    voluptatem placeat consequatur suscipit ex. Accusamus dolore
                    quisquam deserunt voluptate, sit magni perspiciatis quas
                    iste?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='popular-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>6 Ayın En Ucuzu</h3>
          </div>
        </div>
        <div className='row'>
          <ProductCard />
        </div>
      </Container>
    </>
  )
}

export default SingleProduct

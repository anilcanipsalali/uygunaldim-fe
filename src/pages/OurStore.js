import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from 'react-rating-stars-component'
import ProductCard from '../components/ProductCard'
import Container from '../components/Container'

const OurStore = () => {
  const [grid, setGrid] = useState(4)
  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title='Our Store' />
      <Container class1='store-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Kategorilere Göre Alışveriş</h3>
              <div>
                <ul className='ps-0'>
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Şuna Göre Filtrele</h3>
              <div>
                <h5 className='sub-title'>Fiyat</h5>
                <div className='d-flex align-items-center gap-10'>
                  <div className='form-floating'>
                    <input
                      type='email'
                      className='form-control'
                      id='floatingInput'
                      placeholder='From'
                    />
                    <label htmlFor='floatingInput'>En Az</label>
                  </div>
                  <div className='form-floating'>
                    <input
                      type='email'
                      className='form-control'
                      id='floatingInput1'
                      placeholder='To'
                    />
                    <label htmlFor='floatingInput1'>En Çok</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-9'>
            <div className='filter-sort-grid mb-4'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-10'>
                  <p className='mb-0 d-block' style={{ width: '100px' }}>
                    Sort By:
                  </p>
                  <select
                    name=''
                    defaultValue={'manula'}
                    className='form-control form-select'
                    id=''
                  >
                    <option value='manual'>Featured</option>
                    <option value='best-selling'>Best selling</option>
                    <option value='title-ascending'>Alphabetically, A-Z</option>
                    <option value='title-descending'>
                      Alphabetically, Z-A
                    </option>
                    <option value='price-ascending'>Price, low to high</option>
                    <option value='price-descending'>Price, high to low</option>
                    <option value='created-ascending'>Date, old to new</option>
                    <option value='created-descending'>Date, new to old</option>
                  </select>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <p className='totalproducts mb-0'>21 Products</p>
                  <div className='d-flex gap-10 align-items-center grid'>
                    <img
                      onClick={() => {
                        setGrid(3)
                      }}
                      src='images/gr4.svg'
                      className='d-block img-fluid'
                      alt='grid'
                    />
                    <img
                      onClick={() => {
                        setGrid(4)
                      }}
                      src='images/gr3.svg'
                      className='d-block img-fluid'
                      alt='grid'
                    />
                    <img
                      onClick={() => {
                        setGrid(6)
                      }}
                      src='images/gr2.svg'
                      className='d-block img-fluid'
                      alt='grid'
                    />

                    <img
                      onClick={() => {
                        setGrid(12)
                      }}
                      src='images/gr.svg'
                      className='d-block img-fluid'
                      alt='grid'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='products-list pb-5'>
              <div className='d-flex gap-10 flex-wrap'>
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default OurStore

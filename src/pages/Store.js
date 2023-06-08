/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import Container from '../components/Container'
import { useEffect } from 'react'
import { getCategories, getProducts } from '../services/ProductService'
import { toast } from 'react-toastify'
import { Input, Pagination } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import gr from '../images/gr.svg'
import gr2 from '../images/gr2.svg'
import gr3 from '../images/gr3.svg'
import gr4 from '../images/gr4.svg'

const Store = () => {
  const [grid, setGrid] = useState(4)
  const [categories, setCategories] = useState([]);
  const [searchCategory, setSearchCategory] = useState(null);
  const [searchProduct, setSearchProduct] = useState("");
  const [products, setProducts] = useState([]);
  const pageSize = 12;
  const [productsCount, setProductsCount] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const setAllCategories = async () => {
    await getCategories(toast).then((e) => setCategories(e.data))
  }

  const setAllProducts = async () => {
    await getProducts(currentPage-1, pageSize, searchCategory, searchProduct, minPrice, maxPrice, toast).then((e) => {
      setProducts(e.data.content);
      setProductsCount(e.data.totalElements)
    })
  }

  useEffect(() => {
    setAllCategories();
  }, []);

  useEffect(() => {
    setAllProducts();
  }, [currentPage, categories, searchCategory, minPrice, maxPrice, searchProduct])

  return (
    <>
      <Meta title={'Ürünler'} />
      <Container class1='store-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Kategorilere Göre Alışveriş</h3>
              <div>
                <ul className='ps-0'>
                  <li onClick={() => setSearchCategory(null)} key={"all"}>Tüm Ürünler</li>
                  {categories.map((category, i) => (
                      <li onClick={() => {setSearchCategory(category)}} key={i}>{category}</li>
                    ))
                  }
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
                      onBlur={(e) => setMinPrice(e.target.value)}
                    />
                    <label htmlFor='floatingInput'>En Az</label>
                  </div>
                  <div className='form-floating'>
                    <input
                      type='email'
                      className='form-control'
                      id='floatingInput1'
                      placeholder='To'
                      onBlur={(e) => setMaxPrice(e.target.value)}
                    />
                    <label htmlFor='floatingInput1'>En Çok</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-9'>
            <div className='filter-sort-grid mb-4'>
              <div className='d-flex justify-content-sm-between'>
                <div className='pt-1'>
                  <Input prefix={<SearchOutlined />} placeholder="Ürün Ara.." allowClear onChange={(e) => setSearchProduct(e.target.value)} />
                </div>
                <div className='d-flex justify-content-end gap-10'>
                  <p className='totalproducts mb-0 p-2'>{productsCount} Ürün</p>
                  <div className='d-flex gap-10 align-items-center grid'>
                    <img
                      onClick={() => {
                        setGrid(3)
                      }}
                      src={gr4}
                      className='d-block img-fluid'
                      alt='grid'
                    />
                    <img
                      onClick={() => {
                        setGrid(4)
                      }}
                      src={gr3}
                      className='d-block img-fluid'
                      alt='grid'
                    />
                    <img
                      onClick={() => {
                        setGrid(6)
                      }}
                      src={gr2}
                      className='d-block img-fluid'
                      alt='grid'
                    />

                    <img
                      onClick={() => {
                        setGrid(12)
                      }}
                      src={gr}
                      className='d-block img-fluid'
                      alt='grid'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='products-list pb-5'>
              <div className='d-flex gap-10 flex-wrap'>
                <ProductCard grid={grid} products={products} />
              </div>
            </div>
            <div style={{paddingLeft:"25%", paddingRight:"25%"}}>
              <Pagination defaultCurrent={currentPage} current={currentPage} total={productsCount} pageSize={pageSize} onChange={(page) => setCurrentPage(page)} hideOnSinglePage showSizeChanger={false} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Store

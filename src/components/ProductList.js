import React from 'react'
import Product from './Product'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const ProductList = () => {
  const { products, loading } = useGlobalContext()
  if (loading) {
    return <Loading />
  }
  if (products.length < 1) {
    return (
      <h2 className='section-title'>
        No product matched yours search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Product list component</h2>
      <div className='cocktails-center'>
        {products.map((item) => {
          return <Product key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default ProductList

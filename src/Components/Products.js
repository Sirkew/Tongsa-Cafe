import React from 'react'
import { products } from './Data'

const Products = () => {
  return (
    <>
        <section className="products" id='products'>
            <h1 className='heading'>
                our <span>products</span>
            </h1>
            <div className="box-container">
                {
                    products.map((item, index) =>(
                        <div className="box">
                            <div className="image">
                                <img src={item.img} alt=''/>
                                <h3>{item.name}</h3>
                                <h4>{item.price}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Products

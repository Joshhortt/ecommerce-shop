import React from 'react'

const Home = () => {
  return (
    <>
    
    HeroBanner

    <div className="products-heading">
      <h2>Produtos em Destaque</h2>
      <p>Moedas portuguesas e Internacionais das mais variadas épocas</p>
    </div>

    <div className="products-container">
      {[ 'Product 1', 'Product 2'].map(
        (product) => product)
      }
    </div>

    Footer

    </>
  )
}

export default Home
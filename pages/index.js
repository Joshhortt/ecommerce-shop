import React from 'react'

const Home = () => {
  return (
    <>
    
    HeroBanner

    <div>
      <h2>Produtos em Destaque</h2>
      <p>Moedas das mais variadas épocas</p>
    </div>

    <div>
      {[ 'Product 1', 'Product 2'].map(
        (product) => product)
      }
    </div>

    Footer

    </>
  )
}

export default Home
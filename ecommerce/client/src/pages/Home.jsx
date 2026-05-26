import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

import '../styles/home.css'

function Home() {

  const products = [

    {
      name:'Headphones',
      price:1999,
      image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
    },

    {
      name:'Watch',
      price:2999,
      image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    },

    {
      name:'Shoes',
      price:4999,
      image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
    },

    {
      name:'Laptop',
      price:69999,
      image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'
    }

  ]

  return (

    <div>

      <Navbar />

      <Hero />

      <div className='products-container'>

        {
          products.map((product,index)=>(

            <ProductCard
              key={index}
              product={product}
            />

          ))
        }

      </div>

      <Footer />

    </div>

  )

}

export default Home
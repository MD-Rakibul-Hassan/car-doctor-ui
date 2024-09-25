
import About from './About/About'
import Banner from './Banner/Banner'
import Contact from './Contact/Contact'
import Product from './Products/Product'
import Services_area from './Services_area/Services_area'

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services_area />
      <Contact />
      <Product />
    </div>
  )
}

export default Home
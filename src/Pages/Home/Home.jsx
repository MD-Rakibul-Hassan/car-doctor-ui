
import About from './About/About'
import Banner from './Banner/Banner'
import Contact from './Contact/Contact'
import Our_tems from './Our_teams/Our_tems'
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
      <Our_tems />
    </div>
  )
}

export default Home
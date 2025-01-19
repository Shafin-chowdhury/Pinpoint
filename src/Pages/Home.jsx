import React from 'react'
import Navber from '../Components/Navber'
import Search from '../Components/Search'
import IntroBlog from '../Components/IntroBlog'
import Blogs from '../Components/Blogs'
import Footer  from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navber />
      <Search />
      <IntroBlog />
      <Blogs />
      <Footer />
    </div>
  )
}

export default Home

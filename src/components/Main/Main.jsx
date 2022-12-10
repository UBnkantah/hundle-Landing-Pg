import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Grow from '../Grow/Grow'
import Flow from '../Flow/Flow'
import Mode from '../Mode/Mode'
import YourUsers from '../YourUsers/YourUsers'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Grow />
        <Flow />
        <YourUsers />
        <Mode />
        <Footer />
    </div>
  )
}

export default Main
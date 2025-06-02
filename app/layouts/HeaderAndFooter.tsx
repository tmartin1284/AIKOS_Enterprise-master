import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

function HeaderAndFooter() {
  return (
    <div className='relative transition duration-300 bg-linear-to-b from-pdark_smoke_gradiant dark:from-pdark_smoke via-plight_ruby dark:via-pdark_smoke to-pdark_smoke_gradiant dark:to-pdark_smoke'>
      <header className='fixed w-full px-8 top-26 md:px-26'>
        <Header/>
      </header>

      <main className='w-[90%] mx-auto min-h-screen pt-48 pb-24'>
        <Outlet/>
      </main>

      <footer className='w-full '>
        <Footer/>
      </footer>
    </div>
  )
}

export default HeaderAndFooter
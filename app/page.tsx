import React from 'react'
import Hero from '@/app/components/Hero/Hero'
import ContactForm from '@/app/components/Contact/Contact'
import About from '@/app/components/About/About'

const Home = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <ContactForm/>
    </main>
  )
}

export default Home
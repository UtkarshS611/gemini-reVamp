import React from 'react'
import Hero from '@/app/components/Hero/Hero'
import ContactForm from '@/app/components/Contact/Contact'
import About from '@/app/components/About/About'
import Faq from '@/app/components/Faq/Faq'

const Home = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <Faq/>
      <ContactForm/>
    </main>
  )
}

export default Home
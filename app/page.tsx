import React from 'react'


import Hero from '@/app/components/Hero/Hero'
import ContactForm from '@/app/components/Contact/Contact'
import About from '@/app/components/About/About'
import Faq from '@/app/components/Faq/Faq'
import Tracks from '@/app/components/Tracks/Tracks'
import Judges from '@/app/components/Judges/Judges'
import Mentors from '@/app/components/Mentors/Mentors'
import Timeline from '@/app/components/Timeline/Timeline'
import Prizes from '@/app/components/Prizes/Prizes'
import Sponsors from '@/app/components/Sponsors/Sponsors'

const Home = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <Tracks/>
      <Judges/>
      <Mentors/>
      <Timeline/>
      <Prizes/>
      <Sponsors/>
      <Faq/>
      <ContactForm/>
    </main>
  )
}

export default Home
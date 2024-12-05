import React from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import Address from '../../components/Address'
import Specialities from '../../components/Specialities'
import AboutUs from '../../components/AboutUs'
import Location from '../../components/Location'
import SocialNetworks from '../../components/SocialNetworks'


const Main = () => {
  return (
    <div>
        <Header />
        <Card />
        <Address /> 
        <Specialities />
        <AboutUs />
        <Location />
        <SocialNetworks />
    </div>
  )
}

export default Main

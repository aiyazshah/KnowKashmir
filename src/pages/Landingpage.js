import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'
import Services from '../components/Services'
import Contactus from '../components/Contactus'

export default function Landingpage() {
    return (
        <div>
            <Navbar />
            <Aboutus />
            <Services />
            <Contactus />
            <Footer />
        </div>
    )
}

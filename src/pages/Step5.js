import React from 'react'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import StepBar from '../components/common/StepBar'
import Footer from '../components/common/Footer'
import Meeting from '../components/step5/Meeting'
import ContactInfo from '../components/step5/ContactInfo'

export default function Step5() {
    return (
        <>
            <PreNavbar />
            <Navbar />
            <StepBar step5 />
            <Meeting />
            <ContactInfo/>
            <Footer />
        </>
    )
}

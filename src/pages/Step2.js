import React from 'react'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import StepBar from '../components/common/StepBar'
import Footer from '../components/common/Footer'
import Motivating from '../components/step2/Motivating'
import AdditionalComment from '../components/step2/AdditionalComment'

export default function Step2() {
    return (
        <>
            <PreNavbar />
            <Navbar />
            <StepBar step2 />
            <Motivating/>
            <AdditionalComment/>
            <Footer />
        </>
    )
}

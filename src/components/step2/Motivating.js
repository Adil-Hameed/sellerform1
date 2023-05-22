import React, { useState } from 'react'

export default function Motivating() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <div className='container-fluid'>

            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded pb-5'>
                <h3 className='fs-33 text-center fw-bold mb-4 dark-blue-text'>
                    What is motivating you to sell your property?
                </h3>

                <div onClick={() => handleOptionClick('Divorce')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Divorce' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/Group 1000006603.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Divorce
                    </p>
                </div>
                <div onClick={() => handleOptionClick('Retirement')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Retirement' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/Group 1000006609.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Retirement
                    </p>
                </div>
                <div onClick={() => handleOptionClick('Medical')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Medical' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/Group 1000006675.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Medical Situation
                    </p>
                </div>
                <div onClick={() => handleOptionClick('Debt')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Debt' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/Group 1000006676.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Debt
                    </p>
                </div>
                <div onClick={() => handleOptionClick('Loss')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Loss' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/Group 1000006677.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Loss of Job
                    </p>
                </div>
                <div className='d-md-block d-none'></div>
                <div onClick={() => handleOptionClick('Foreclosure')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Foreclosure' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/Group 1000006678.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Foreclosure
                    </p>
                </div>
                <div onClick={() => handleOptionClick('Bankruptcy')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Bankruptcy' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/Group 1000006679.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Bankruptcy
                    </p>
                </div>
                <div onClick={() => handleOptionClick('Inheritance')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Inheritance' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/Group 1000006680.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Inheritance
                    </p>
                </div>
                <div onClick={() => handleOptionClick('Booming')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Booming' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/Group 1000006681.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Booming market
                    </p>
                </div>
                <div onClick={() => handleOptionClick('Other')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selectedOption === 'Other' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/other.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Other
                    </p>
                </div>
            </div>

        </div>

    )
}

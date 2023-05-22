import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ChooseOption() {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (

        <div className='container-fluid'>
            <div className='row w-90 mx-auto dark-blue rounded py-5'>
                <div className='col-12 '>
                    <p className='fs-26 light-green-text fw-light text-center'>
                        Choose one option
                    </p>
                    <h3 className='fs-33 text-center fw-bold'>
                        What do you want to accomplish?
                    </h3>

                </div>
                <div className='col-6 mt-5 d-flex justify-content-end'>
                    <div
                        className={`rounded option-card d-flex justify-content-center align-items-center flex-column pointer ${selectedOption === 'stay' ? 'light-green ' : 'bg-white'}`}
                        onClick={() => handleOptionClick('stay')}
                    >

                        <img src='/asset/ICONS S2R-07 3.svg' className='img-fluid' alt='' />
                        <p className='dark-blue-text fw-bold fs-26 mb-0'>
                            Sell and Stay
                        </p>
                    </div>

                </div>

                <div className='col-6 mt-5 d-flex justify-content-start'>

                    <div
                        className={`rounded option-card d-flex justify-content-center align-items-center flex-column pointer ${selectedOption === 'move' ? 'light-green  ' : 'bg-white'}`}

                        onClick={() => handleOptionClick('move')}
                    >

                        <img src='/asset/ICONS S2R-24.svg' className='img-fluid' alt='' />
                        <p className='dark-blue-text fw-bold fs-26 mb-0'>
                            Sell and Move Out
                        </p>
                    </div>
                </div>




            </div>

            <div className='text-center py-5'>
                <Link to="/step2">
                    <p className='pointer d-inline-block light-green p-3 px-5 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                        Next &gt; &gt;
                    </p>
                </Link>
            </div>
        </div>

    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function AdditionalComment() {
    return (
        <div className='container-fluid'>

            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded pb-5'>
                <h3 className='fs-26 text-center fw-semibold mb-4 dark-blue-text'>
                    Additional Comments (optional):
                </h3>
                <input type='text' className='w-80 mx-auto rounded p-3 credit-card-input dark-blue-text' placeholder='Example: Overwhelming credit card debt' />

            </div>
            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded '>
                <h3 className='fs-33 fw-bold text-center mb-3'>
                    How soon would you want to use our platform?
                </h3>
                <p className='text-center formgray-text'>
                    Please click on the appropriate timeframe below
                </p>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='78' defaultChecked />
                    <span className=''>Less than 3 months</span>
                </label>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='78' />
                    <span className=''>3 to 6 months</span>
                </label>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='78' />
                    <span className=''>6 to 12 months</span>
                </label>

                <label className='check-box-parent'>
                    <input type="radio" name='78' />
                    <span className=''>More than 12 months</span>
                </label>

            </div>

            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded py-5 '>
                <h3 className='fs-33 fw-bold text-center mb-3'>
                    Who are the owners of the house?
                </h3>
                <p className='text-center formgray-text'>
                    (Who is in title of the property)
                </p>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='me' defaultChecked />
                    <span className=''>Me</span>
                </label>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='me' />
                    <span className=''>Me + Someone else</span>
                </label>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='me' />
                    <span className=''>I know the owner</span>
                </label>
                <label className='check-box-parent mb-3'>
                    <input type="radio" name='me' />
                    <span className=''>I’m the agent</span>
                </label>
            </div>

            <div className='text-center pb-5'>
                <Link to="/">
                    <p className='me-2 pointer d-inline-block border p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                        &lt; &lt; Back
                    </p>
                </Link>
                <Link to="/step3">
                    <p className='ms-2 pointer d-inline-block light-green p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                        Next &gt; &gt;
                    </p>
                </Link>
            </div>
        </div>
    )
}

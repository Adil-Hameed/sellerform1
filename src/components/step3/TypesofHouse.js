import React from 'react'

export default function TypesofHouse() {
    return (
        <div className='container-fluid'>

            <div className='row w-90 justify-content-md-evenly justify-content-around mx-auto rounded pb-5'>
                <h3 className='fs-33 text-center fw-bold mb-4 dark-blue-text'>
                    What is the type of house you are looking to sell?
                </h3>

                <div className='col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4'>
                    <img src='/asset/Single Family.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Single-family house
                    </p>
                </div>
                <div className='col-md-2 pointer col-5 border rounded text-center p-3 mb-4'>
                    <img src='/asset/Townhouse.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Townhouse
                    </p>
                </div>
                <div className='col-md-2 pointer col-5 border rounded text-center p-3 mb-4'>
                    <img src='/asset/mobile-manufactured.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Mobile/ Manufactured
                    </p>
                </div>
                <div className='col-md-2 pointer col-5 border rounded text-center p-3 mb-4'>
                    <img src='/asset/other.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Other
                    </p>
                </div>

            </div>

        </div>
    )
}

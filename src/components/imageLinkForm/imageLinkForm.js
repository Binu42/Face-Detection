import React from 'react';
import './imageLinkForm.css'

const imageLinkForm = () => {
    return (
        <div className='ImageLink'>
            <p className='f3 pa1'>
                {'This will detect face in image. Give it a Try.'}
            </p>
            <div className='center'>
                <div className='pa3 br3 shadow-5 form center'>
                    <input type='text' className='f4 pa2 w-70 center' placeholder='Give the image link'/>
                    <button className='w-30 grow f5 link grow btn ph3 pv2 dib white'>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default imageLinkForm;
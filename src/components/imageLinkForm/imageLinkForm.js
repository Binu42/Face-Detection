import React from 'react';
import './imageLinkForm.css'

const imageLinkForm = ({onInputChange, onButtonClick}) => {
    return (
        <div className='ImageLink'>
            <p className='f3 pa1'>
                {'This will detect face in image. Give it a Try.'}
            </p>
            <div className='center'>
                <div className='pa3 br3 shadow-5 form center'>
                    <input onChange={onInputChange} type='text' className='f4 pa1 w-70 center' placeholder='Give the link of image'/>
                    <button className='w-28 grow f5 link grow btn ph3 pv2 dib white' onClick={onButtonClick}>Detect</button>
                </div>
                {/* <div className='pa3 br3 shadow-5 form center'>
                    <input onChange={onInputChange2} type='file' className='f4 pa1 w-70 center' placeholder='Give the link of image'/>
                    <button className='w-28 grow f5 link grow btn ph3 pv2 dib white' onClick={onButtonClick}>Detect</button>
                </div> */}
            </div>
        </div>
    )
}

export default imageLinkForm;
import React from 'react';

const ImageUpload = ({onButtonClick, onUpload}) => {
    return (
        <div className='center ImageLink'>
                <form action='/upload' method='post' className='pa3 br3 shadow-5 form center'>
                    <input onChange={onUpload} type='file' className='f4 pa2 w-70 center' placeholder='Give the link of image' accept="image/gif, image/jpeg, image/png" name='image'/>
                    <button className='w-30 grow f5 link grow btn ph3 pv2 dib white' onClick={onButtonClick} type='submit'>Detect</button>
                </form>
        </div>
    )
}
    
  export default ImageUpload;
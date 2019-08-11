import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({boxes, imageUrl}) => {
    const faces = [];
    // Storing the the co-ordinate of faces
    if(boxes.leftCol){
        for (var i=0; i<boxes.leftCol.length; i++) {
            faces.push(<div className='border-box' style={{top: boxes.topRow[i], left: boxes.leftCol[i], right: boxes.rightCol[i], bottom: boxes.bottomRow[i]}} key={`id ${i}`}></div>)
          }
    }
    if(!imageUrl){
        return <span></span>
    }else{
        return (
            <div className='center padding-top image-container'>
                <p id='message' className='center Load-msg'></p>
                <img id='input-image' alt={'Give Url to detect'} src={imageUrl} className='img-fluid'/>
                {/* // different faces in image */}
                {faces}
            </div>
        )
    }
}

export default FaceRecognition;

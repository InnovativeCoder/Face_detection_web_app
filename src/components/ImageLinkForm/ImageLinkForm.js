import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className = 'f3'>
                {'This is a face recogniton web app.'}
            </p> 
            <div >
                <input className = 'f4 pa2 w-40 center' type='tex' onchange={onInputChange} />
                <button className='w-10 grow f4 link ph3 pv2 dib white bg-light-purple'
                onClick={onButtonSubmit}
                > Detect </button>
            </div>        
        </ div>
    )
}

export default ImageLinkForm;
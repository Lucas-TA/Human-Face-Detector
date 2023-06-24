import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 white shadow-hover'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5 shadow-hover'>
                    <input  className='f4 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv0 dib white bg-custom mid'><p className='center center1' onClick={onButtonSubmit}>Detect</p></button>
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm;
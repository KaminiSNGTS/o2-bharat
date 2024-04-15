import React from 'react';
import "./index.css";
import Button from '../button/page';
const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {apImg, btnTitle, description, bgImgSrc,btnTitle2,desc2} = testiMonialDetail;
    // console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div className="tesimonal-container">
            <div className="active-image">
                <img className="main-img" src={bgImgSrc.src} />
           
               <div className='admin-bttn'> <Button title={btnTitle}/></div>
            <div className="testimonial-data">
            <img className='img-2024' src={apImg.src} />
                <p className='e-desc'>{description}</p>
           <div className='btm-content'>
           <Button title={btnTitle2} />
                <h5 className='e-desc2'>{desc2}</h5>
           </div>
            </div>
             </div>
        </div>
    );
};

export default TestiMonialsDetails;
'use client'
import Button from "@/components/button/page";
import "./about.css"
import kindnessImg from "../../../public/assets/images/kindNessImg.png";
import volenteerData from "../volenteersCardsData/page.js"
import VolunteerbgImg from "../../../public/assets/images/volunteer-bg-img.png";
import "../volenteersCardsData/volenteer.css"
import { FaArrowDown } from "react-icons/fa6";
import VolVolunteerPosition from "../volenteersComponent/page";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FirstSection from "@/components/firstSectionOfAllPages/page";

const About = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 1200,
    }

    return (
        <div className="about-container">
            <div className="about-1section">
               <FirstSection
                title='About Us' 
                title2='Welcome to the O2 Bharat Global network'
                pg='The O2 Bharat envisions a connected community, one in which all of its members have dependable access to resources that enrich and empower lives. A community where all of its members feel they can belong, one in which everyone has a chance to both contribute and receive. A community where everyone can feel fulfilled by their involvement.'
                />
            </div>

            <div className="ab-2section">
                <div className="ab-sec2-container">
                    <h1 className="ab-sec2-h1" style={{ textAlign: 'center' }}>Join With Us</h1>
                    <h1 className="ab-sec2-h2" style={{ textAlign: 'center' }}>Our Mission</h1>
                    <div className="ab-cards-container">
                        <div className="ab-card">

                            <h1 className="ab-number-style">01</h1>

                            <h1 className="ab-card-heading">Taking Responsibility</h1>
                            <p className="ab-card-pg">Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                            <Button title='Get Started' />
                        </div>
                        <div className="ab-card">

                            <h1 className="ab-number-style">02</h1>

                            <h1 className="ab-card-heading">Mobilizing Potential</h1>
                            <p className="ab-card-pg">Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                            <Button title='Get Started' />
                        </div>
                        <div className="ab-card">

                            <h1 className="ab-number-style">03</h1>

                            <h1 className="ab-card-heading">Inspiring Collective Action</h1>
                            <p className="ab-card-pg">Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                            <Button title='Get Started' />
                        </div>
                    </div>


                    <div className="ab-2section-2container">
                        <div className="ab-sec1">
                            <h1 className="ab-sec2-h1" >Spreading Kindness</h1>
                            <h1 className="ab-sec2-h2" >Ensuring Happier Childhoods</h1>
                            <p className="ab-sec2-pg">When deciding which charity to donate to, it's important to do your e search and find one that aligns with your values and interests.
                                Look for charities that are transparent preventable diseases.</p>
                            <p className="ab-sec2-pg">
                                When deciding which charity to donate to, it's important to do your e search and find one that aligns with your values and interests.
                                Look for charities that are transparent preventable diseases.

                                When deciding which charity to donate to, it's important to do your e search
                                and find one that aligns with your values and interests. Look for charities that are transparent preventable diseases.
                            </p>
                        </div>
                        <div className="ab-sec2-img">
                            <img src={kindnessImg.src} />
                        </div>
                    </div>

                </div>
                <div className="ab-3section">
                    <div className="volunteer-img-container">
                        <img src={VolunteerbgImg.src} />

                        <div className="volenteer-body">
                            <h1 className="ab-sec2-h1" style={{ textAlign: 'center' }}>Our Warriors</h1>
                            <h1 className="ab-sec2-h2" style={{ textAlign: 'center' }}>Our Frontiers Volunteers</h1>
                            <div className="v-container">

                                {volenteerData.map((data, index) => {
                                    return (

                                        <div key={index} className="v-card-container">
                                            <img className="v-img" src={data.bgImgSrc.src} />
                                            <h1 className="v-name">{data.name}</h1>
                                            <p className="v-d">{data.description}</p>
                                            <div className="social-icons">
                                                <img src={data.fb.src} />
                                                <img src={data.linkdln.src} />
                                                <img src={data.twt.src} />
                                                <img src={data.insta.src} />
                                            </div>
                                        </div>

                                    )
                                })}

                            </div>
                            <div className="show-btn-container">
                                <button className="show-more-btn"><span>Show More </span><span><FaArrowDown /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <VolVolunteerPosition />
            </div>
            <div style={{width:'100%'}}>
                <h1 className="ab-sec2-h1" style={{ textAlign: 'center' }}>Our Warriors</h1>
                <h1 className="ab-sec2-h2" style={{ textAlign: 'center' }}>Our Frontiers Profiles</h1>

<div className="ab-carousel-container">
    <Slider {...settings} >
    {volenteerData.map((data, index) => {
                                    return (

                                        <div key={index} className="ab-v-card-container">
                                            <img className="v-img" src={data.bgImgSrc.src} />
                                            <h1 className="v-name">{data.name}</h1>
                                            <p className="v-d">{data.description}</p>
                                            <div className="social-icons">
                                                <img src={data.fb.src} />
                                                <img src={data.linkdln.src} />
                                                <img src={data.twt.src} />
                                                <img src={data.insta.src} />
                                            </div>
                                        </div>

                                    )
                                })}
    </Slider>
</div>
            </div>
        </div>
    )
}
export default About;
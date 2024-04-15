'use client'
import homeImg from "../../../public/assets/images/home-img.png";
import clientImg from "../../../public/assets/images/client-group.png";
import helpIcon from "../../../public/assets/images/help.png";
import lighticon from "../../../public/assets/images/light.png";
import giftIcon from "../../../public/assets/images/gift.png";
import homeImg2 from "../../../public/assets/images/home-img-2.png";
import workImg1 from "../../../public/assets/images/work-img1.png";
import workImg2 from "../../../public/assets/images/work-img2.png";
import workImg3 from "../../../public/assets/images/work-img3.png";
import up_arrow from "../../../public/assets/images/uil-arrow-up-right.png";
import down_arrow from "../../../public/assets/images/uil-arrow-down-right.png";
import left from "../../../public/assets/images/left-arrow.png";
import right from "../../../public/assets/images/right-arrow.png";
import prevReview from "../../../public/assets/images/prev-review.png";
import nextReview from "../../../public/assets/images/next-review.png";
import VolunteerbgImg from "../../../public/assets/images/volunteer-bg-img.png";
import "./home.css";
import Button from "@/components/button/page";
import { useRef, useState } from "react";
import cartData from "./cartData";
import eventsData from "./events"
import volenteerData from "../volenteersCardsData/page"
import reviewsData from "./reviewsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestiMonialsDetails from "@/components/testimonials/page";
import "../volenteersCardsData/volenteer.css"

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="prev-btn" onClick={onClick}>
        <img src={right.src} />
      </div>
    );
  };
  
  const CustomNextArrow = (props) => {
    const {  onClick } = props;
    return (
      <div className="next-btn" onClick={onClick}>
         <img src={left.src} />
      </div>
    );
  };
  const CustomNextReview = (props) => {
    const {  onClick } = props;
    return (
      <div className="prev-reviewbtn" onClick={onClick}>
         <img src={prevReview.src} />
      </div>
    );
  };
  const CustomprevReview = (props) => {
    const {  onClick } = props;
    return (
      <div className="next-reviewbtn" onClick={onClick}>
         <img src={nextReview.src} />
      </div>
    );
  };
const Home = () =>{
    const sliderRef = useRef(null);

    let settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
              breakpoint: 600, // Adjust this breakpoint as needed
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            }
        ]

      };
      let settings2 = {
        dots: false,
        infinite: true,
        speed: 8000,
        slidesToShow: 2,
        slidesToScroll: 2,
        // autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
      }
      let settings3 = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
      }
      let settings4 = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: <CustomprevReview />,
        nextArrow: <CustomNextReview />,
      }
      const [expandStates, setExpandStates] = useState(new Array(cartData.length).fill(false));

      const toggleExpandState = (index) => {
        const newExpandStates = [...expandStates];
        newExpandStates[index] = !newExpandStates[index];
        setExpandStates(newExpandStates);
    };

    return(
       <main className="home-container">
         
       <div className="section-container">
<div>
<button className="partener-btn">Become a Partner</button>
<h1 className="home-heading">Small Effort Make <br/> Big Change</h1>
<p className="home-pg">Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>

<div className="btns-content">
<div>
<Button title='Donate Now'/>
<button className="started-btn">Get Started</button>
</div>
<img src={clientImg.src} />
</div>
</div>
<div>
    <img src={homeImg.src}/>
</div>
       </div>

       <div className="home-section">
        <div className="help-btn"><button className="partener-btn">How to Help</button></div>
        <h1 className="section2-h1">The Way You Can Make Difference</h1>

        <div className="cards-container">
            <div className="card">
                <div  className='card-header'>
                    <button className="card-btns" style={{backgroundColor:'#FFFAE0'}}><img src={helpIcon.src} /></button>
                    <h1 className="number-style">01</h1>
                </div>
                <h1 className="card-heading">Become a Volunteer</h1>
                <p className="card-pg">Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                     <Button title='Get Started'/>
            </div>
            <div className="card">
                <div  className='card-header'>
                    <button className="card-btns" style={{backgroundColor:'#B6F1FF'}}><img src={lighticon.src} /></button>
                    <h1 className="number-style">02</h1>
                </div>
                <h1 className="card-heading">Become a Volunteer</h1>
                <p className="card-pg">Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                     <Button title='Get Started'/>
            </div>
            <div className="card">
                <div  className='card-header'>
                    <button className="card-btns" style={{backgroundColor:'#D4FDC8'}}><img src={giftIcon.src} /></button>
                    <h1 className="number-style">03</h1>
                </div>
                <h1 className="card-heading">Become a Volunteer</h1>
                <p className="card-pg">Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                     <Button title='Get Started'/>
            </div>
        </div>
       </div>

       <div className="container-section3">
        <div className="left-container">
        <h3 className="work-headingh1">Know About</h3>
        <h2 className="work-headingh2">Our Areas of Work</h2>
        <p className="section3-pg">When deciding which charity to donate to, it's important to do your e search and find one that aligns with your values and interests.
             Look for charities that are transparent preventable diseases.</p>
        <p className="section3-pg">When deciding which charity to donate to, it's important to do your e search and find one that aligns with your values and interests.
             Look for charities that are transparent preventable diseases.</p>
             <div className="work-container">
                <img src={workImg1.src} />
                <div>
                    <h2 className="work-h2">Education</h2>
                    <p className="works-pg">Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </div>
             </div>
             <div className="work-container">
                <img src={workImg2.src} />
                <div>
                    <h2 className="work-h2">Education</h2>
                    <p className="works-pg">Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </div>
             </div>
             <div className="work-container">
                <img src={workImg3.src} />
                <div>
                    <h2 className="work-h2">Education</h2>
                    <p className="works-pg">Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </div>
             </div>
        </div>
        <div className="right-container">
            <img src={homeImg2.src} />
        </div>
       </div>

       <div className="container-section4">
        <h1 className="work-headingh1" style={{textAlign:'center'}}>From Our Desk</h1>
        <h2 className="work-headingh2" style={{textAlign:'center'}}>See the Latest Posts</h2>

        <Slider ref={sliderRef} {...settings}>
     {cartData.map((item, index)=>{
        return(
            <div className="slider-cards-container" key={index}>
            <div className="card-bg-img">
            <img className="slider-image" src={item.bgImgSrc.src}/>
            <div className="admin-btn"><Button title={item.btnTitle}/></div>
            </div>
            <div className="cards-contents">
            <h1 className="cards-h1">
                {item.title}
            </h1>
            <p className={`cards-pgg ${expandStates[index] ? 'expanded' : ''}`}>{item.description}</p>
            <button onClick={() => toggleExpandState(index)} className="read-btn">
    <span>{expandStates[index] ? 'Read less' : 'Read more'}</span>
    <span><img src={expandStates[index] ? up_arrow.src : down_arrow.src} /></span>
</button>
            </div>
           
            </div>
        )
     })}
    </Slider>
     

       </div>

       <div className="container-section5">
       <h2 className="conunter-heading">Best Statistics Give <span style={{color:'#F3CE14'}}>Hope</span> | Numbers <span style={{color:'var(--btnbg)'}}>Motivate</span> Us to do More </h2>

       <div className="counter-container">
        <div className="display">
            <div>
                <h1 className="count-number">120k +</h1>
                <p className="count-pg">Active Volunteers</p>
                </div>
            <div>
                <h1 className="count-number">65</h1>
                <p className="count-pg">Successful Campaigns</p>
                </div>
                </div>
                <div>
                <h1 className="count-number">17</h1>
                <p className="count-pg">Active Campaigns</p>
                </div>
                <div className="display">
            <div>
                <h1 className="count-number">39</h1>
                <p className="count-pg">Supporting Countries</p>
                </div>
            <div>
                <h1 className="count-number">22</h1>
                <p className="count-pg">NGOs</p>
                </div>
                </div>
       </div>
       </div>

       {/* <div className="container-section6">
        <h1 className="work-headingh1" style={{textAlign:'center'}}>Featured</h1>
        <h1 className="work-headingh2" style={{textAlign:'center'}}>Upcoming & Completed Events</h1>
      
      <div className="events-container">
      <Slider  {...settings2}>
     {eventsData.map((item, index)=>{
        return(
           
                <TestiMonialsDetails testiMonialDetail={item} key={index}/>
               
        )
    })}
    </Slider>
      </div>
       </div> */}

<div className="container-section7">
    <div className="volunteer-img-container">
        <img src={VolunteerbgImg.src} />
   
    <div className="volenteer-body">
<h1 className="work-headingh1" style={{textAlign:'center'}}>Our Warriors</h1>
        <h1 className="work-headingh2" style={{textAlign:'center'}}>Our Frontiers Volunteers</h1>
       <div className="v-carousel-container">
        <Slider  {...settings3}>
     {volenteerData.map((data, index)=>{
        return(
           
            <div key={index} className="v-card-container">
                <img className="v-img" src={data.bgImgSrc.src}/>
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
</div>

<div className="container-section8">
<h1 className="work-headingh1" >Our Warriors</h1>
        <h1 className="work-headingh2" >What They’re Talking About Us</h1>
        <div className="warriors-container">
        <Slider  {...settings4}>
            {reviewsData.map((data, index)=>{
                return(
                    <div key={index} className="reviews-container">
                     <div className="first-section">
                      <div className="sec-section">
                      <div className="client-img"> <img src={data.client.src} /></div>
                       <div className="details">
                        <h1 className="client-name">{data.name}</h1>
                        <h1 className="client-title">{data.title}</h1>
                       </div>
                      </div>
                       <div className="colon-img">
                        <img src={data.colon.src}/>
                       </div>
                     </div>
                     <div className="desc">
                        <p className="desc-pg">{data.description}</p>
                        <img src={data.star.src} />
                     </div>
                    </div>
                )
            })}
            </Slider>
        </div>
</div>
       </main>
    )
}
export default Home;
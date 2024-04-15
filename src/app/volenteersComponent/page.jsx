import cartData from "./cartData";
import "./index.css";

const VolVolunteerPosition = () =>{
    return(
        <div className="vp-container">
           <h1 className="vp-h1">Availability</h1>
           <h1 className="vp-h2">Volunteer Positions Available</h1>
           
           <div className="vp-card-content">
            {cartData.map((data, index)=>{
                return(
                    <div key={index} className="vp-card">
                       <img className="vp-img" src={data.Img.src} />
                       <div>
                        <h1 className="vp-title">{data.title}</h1>
                        <p className="vp-p">{data.description}</p>
                       </div>
                        </div>
                )
            })}
           </div>

           <div className="banner-container">
            <div className="banner-content">
            <div className="b-data">
            <h1 className="banner-h1">Volunteer Positions Available</h1>
            <h1 className="banner-h2">
            Join your hand with us for a better life and beautiful future.
            </h1>
          </div>
          <button className="b-donate-btn">Donate Now</button>
            </div>
           </div>
        </div>
    )
}
export default VolVolunteerPosition;
import Button from "../button/page";
import logo from "../../../public/assets/images/footer-logo.png"
import "./footer.css";

const Footer = () =>{
    return(
        <div className="ft-container">
        <div className="footer-container">
            <div className="footer-sec-1">
                <div className="sec1-content">
                    <h1 className="ft-title">Your donation, no matter how big or small, can make.</h1>
                    <p className="ft-pg">With lots of unique blocks, you can easily 
                        build a page without coding. Build your next landing page.</p>
                        <Button title='Donate Now'/>
                </div>
                <div className="sec1-content2">
                    <h1 className="ft-title2">Awards & Certifications</h1>
                </div>
            </div>
            <div className="footer-sec-2">
                <div>
                    <img className="ft-logo" src={logo.src} />
                    <p className="ft-pg2">With lots of unique blocks, you can easily
                         build a page without coding. Build your next landing page.</p>
                </div>
                <div className="ft-links-container">
                    <div>
                        <ul className="ft-ul">Company</ul>
                        <li className="ft-li">About us</li>
                        <li className="ft-li">Contact us</li>
                        <li className="ft-li">Careers</li>
                        <li className="ft-li">Press</li>
                    </div>
                    <div>
                        <ul className="ft-ul">Product</ul>
                        <li className="ft-li">Features</li>
                        <li className="ft-li">Pricing</li>
                        <li className="ft-li">News</li>
                        <li className="ft-li">Help desk</li>
                        <li className="ft-li">Support</li>
                    </div>
                    <div>
                        <ul className="ft-ul">Services</ul>
                        <li className="ft-li">Digital Marketing</li>
                        <li className="ft-li">Content Writing</li>
                        <li className="ft-li">SEO for Business</li>
                        <li className="ft-li">UI Design</li>
                    </div>
                    <div>
                        <ul className="ft-ul">Legal</ul>
                        <li className="ft-li">Privacy Policy</li>
                        <li className="ft-li">Terms & Conditions</li>
                        <li className="ft-li">Return Policy</li>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Footer;
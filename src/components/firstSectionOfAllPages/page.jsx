import "./index.css";

const FirstSection = ({title, title2, pg}) =>{
    return(
        <div className="f-sec-container">
                <h2 className="sec1-h1">{title}</h2>
                <h1 className="sec1-h2">{title2}</h1>
                <p className="sec1-pg">{pg}</p>
            </div>
    )
}
export default FirstSection;
import wave from "../../img/wave.png";
import diginext from "../../img/diginext.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="wave">
      <img src={wave} alt="" />
      <h2 className="desc">
        Code By <span> &#10084;</span>
      </h2>
      <img className="logo" src={diginext} alt="" />
    </div>
  );
};

export default Footer;

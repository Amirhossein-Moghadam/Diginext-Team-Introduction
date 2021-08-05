import circuit from "../../img/circuit.svg";
import "./main.css";

const Main = () => {
  return (
    <div className="main mt-5" id="about-us">
      <div>
        <img src={circuit} alt="" />
      </div>
      <div className="content">
        <h1>Do You Want To Know Us?</h1>
      </div>
    </div>
  );
};

export default Main;

import { Link } from "react-router-dom";
import logo from "../../P-removebg-preview.png";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="HomePage">
        <h1 
        style={{fontSize: "12vmin"}}
        >PokéZon
        </h1>
        <h3
        style={{fontSize: "8vmin", marginTop: "-2vmin"}}
        >Gotta Buy 'Em All!</h3>
        <Link to="/login" 
        className="btn"
        style={{fontSize: "4vmin"}}
        >
          Log In / Sign Up
        </Link>
      </div>
      <img src={logo} alt="logo" className="logo" />
    </>
  );
}

// import logo from "../../assets/logo.png";
import { Link } from "react-router";

const logo = new URL("../../assets/logo.png", import.meta.url).href;

const Header = () => {
    console.log("logo:", logo, typeof logo);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="MMP Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
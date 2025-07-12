import { Link, useNavigate } from "react-router";
import { navigationList } from "../../constants/header";
import './header.scss';
import { textToId } from "../../utils/helper";

const logo = new URL("../../../assets/logo.png", import.meta.url).href;

const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div className="header">
            <div className="logo-container" onClick={handleLogoClick}>
                <img className="logo" src={logo} alt="MMP Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    {
                        navigationList.map((listItem) => {
                            return <li key={textToId(listItem.caption)}><Link to={listItem.navigateTo}>{listItem.caption}</Link></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header;
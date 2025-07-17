import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { faBars, faMoon, faSun, faTimes, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigationList } from "../../constants/header";
import { textToId } from "../../utils/helper";
import './header.scss';
import { ThemeContext } from "../../context/ThemeContext";

const logo = new URL("../../../assets/logo.png", import.meta.url).href;

const Header = () => {
    const navigate = useNavigate();
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [menuOpen, setMenuOpen] = useState(false);

    // ✅ Close mobile menu when screen becomes large (desktop)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpen]);

    const handleLogoClick = () => {
        navigate('/');
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const getThemeToggleButtons = () => {
        // return <FontAwesomeIcon
        //         title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        //         className="theme-toggle" onClick={toggleTheme}
        //         icon={isDarkMode ? faSun : faMoon}
        //     />
        return <div
                title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                className="theme-toggle"
                onClick={toggleTheme}
            >{isDarkMode ? '☀️' : '🌙'}</div>
    }

    return (
        <div className="header">
            <div className="logo-container" onClick={handleLogoClick}>
                <img className="logo" src={logo} alt="MMP Logo" />
            </div>

            {/* Hamburger Menu Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
            </div>

            {/* Desktop Navigation */}
            <div className="nav-items">
                <ul>
                    {
                        navigationList.map((listItem) => {
                            return <li key={textToId(listItem.caption)}><Link to={listItem.navigateTo}>{listItem.caption}</Link></li>
                        })
                    }
                    {getThemeToggleButtons()}
                </ul>
            </div>

            {/* Mobile Navigation Overlay */}
            {menuOpen && (
                <div className="mobile-menu">
                    <ul>
                        {navigationList.map((listItem) => (
                            <li key={textToId(listItem.caption)}>
                                <Link to={listItem.navigateTo} onClick={() => setMenuOpen(false)}>
                                    {listItem.caption}
                                </Link>
                            </li>
                        ))}
                        {getThemeToggleButtons()}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Header;
import Button from "../Button";
import Logo from "../../assets/images/logo-bookmark.svg"
import "./Navbar.scss"
import HamburgerMenu from "../../assets/images/icon-hamburger.svg";
import { useState } from "react";
import Menu from "../Menu/Menu";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
     {isMenuOpen ? (
        <Menu setIsMenuOpen={setIsMenuOpen}/>
     ): (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={Logo} alt="Bookmark Logo" />
            </div>
            <div className="navbar__menu">
                <ul className="navbar__links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <Button 
                    label="Login"
                    variant="primary"
                    onClick={() => alert("Login button clicked")}
                    disabled={false}
                />

            </div>
            <div className="navbar__hamburger">
                <button 
                    className="navbar__button"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <img src={HamburgerMenu} alt="Hamburger Menu" />
                </button>
            </div>
        </nav>
        
     )
        
        
     
     }
    </>
  )
}

export default Navbar
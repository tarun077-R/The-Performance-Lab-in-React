import Popup from "./PopUp";
import { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    // const [popupType, setPopupType] = useState(null);
    const [popupOpen, setPopupOpen] = useState(false);
    const [consultation, setConsultation] = useState(false);
    const [services, setServices] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header
                id="navbar"
                className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""
                    }`}
            >

                <div className="logo">
                    THE PERFORMANCE LAB
                </div>
                <nav className="main-nav">
                    <ul className="nav-links">
                        <li>
                            <a href="#" onClick={closeMenu}>
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={closeMenu}>
                                WHO WE ARE
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={closeMenu}>
                                BLOG
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={closeMenu}>
                                CONTACT
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setServices(true);
                                    setPopupOpen(true)
                                }}
                            >
                                SERVICES+
                            </a>
                        </li>
                    </ul>

                </nav>

                <button
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <a href="#" className="cta-btn" onClick={() =>{setPopupOpen(true); setConsultation(true)}}>
                    BOOK A CONSULTATION →

                </a>
            </header>
            {popupOpen && (
                <Popup
                consultation={consultation}
                services={services}
                    onClose={() => {
                        setPopupOpen(false);
                        setServices(false);
                        setConsultation(false)}}
                />
            )}
        </>
    );
}

export default Navbar;
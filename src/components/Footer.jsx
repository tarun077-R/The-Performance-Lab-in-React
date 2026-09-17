import "../styles/Footer.css";

import footerTraining from "../assets/footer-training.webp";

const Footer = () => {
    return (
        <footer className="site-footer">


            <section className="footer-newsletter">

                <div className="newsletter-content">

                    <span className="footer-label">
                        STAY AHEAD OF THE CURVE
                    </span>

                    <h2>
                        Training insights, performance science, and
                        updates from the Lab — straight to your inbox.
                    </h2>

                </div>

                <form className="newsletter-form">

                    <div className="newsletter-input">

                        <input
                            type="email"
                            placeholder="YOUR EMAIL ADDRESS"
                        />

                        <button type="submit">
                            SIGN UP
                        </button>

                    </div>

                    <p className="newsletter-note">
                        BY SUBMITTING YOU AGREE TO OUR{" "}
                        <a href="#">
                            PRIVACY POLICY
                        </a>{" "}
                        AND PROVIDE CONSENT TO RECEIVE
                        UPDATES FROM THE PERFORMANCE LAB
                    </p>

                </form>

            </section>

            <section className="footer-main">

                <div className="footer-image">

                    <img
                        src={footerTraining}
                        alt="Performance Lab"
                    />

                </div>


                <div className="footer-links">


                    <div className="footer-column">

                        <span className="footer-label">
                            SERVICES
                        </span>

                        <div className="footer-link-row">

                            <a href="#">Testing</a>
                            <a href="#">Training</a>
                            <a href="#">Therapy</a>
                            <a href="#">Longevity</a>

                        </div>

                    </div>

                    <div className="footer-column">

                        <span className="footer-label">
                            COMPANY
                        </span>

                        <div className="footer-link-row">

                            <a href="#">Who we are</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                            <a href="#">FAQ's</a>

                        </div>

                    </div>


                    {/* GET IN TOUCH */}

                    <div className="footer-column">

                        <span className="footer-label">
                            GET IN TOUCH
                        </span>

                        <div className="footer-contact-row">

                            <a href="mailto:info@myperformancelab.com">
                                info@myperformancelab.com
                            </a>

                            <a href="tel:+16473527522">
                                +1 (647) 352-7522
                            </a>

                        </div>

                    </div>

                    <div className="footer-column">

                        <span className="footer-label">
                            SOCIALS
                        </span>

                        <div className="footer-link-row">

                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>

                        </div>

                    </div>


                    <div className="footer-column footer-location">

                        <span className="footer-label">
                            LOCATION
                        </span>

                        <a href="#">
                            185 Bridgeland Avenue,
                            Unit 115, Toronto, ON
                        </a>

                    </div>


                    <a
                        href="#"
                        className="footer-cta"
                    >

                        <span>
                            BOOK A CONSULTATION
                        </span>

                        <span className="footer-cta-arrow">
                            →
                        </span>

                    </a>

                </div>

            </section>

            <section className="footer-brand">

                <div className="brand-frame">

                    <span className="frame-corner corner-tl"></span>
                    <span className="frame-corner corner-tr"></span>
                    <span className="frame-corner corner-bl"></span>
                    <span className="frame-corner corner-br"></span>


                    <div className="brand-name">

                        <span>
                            THE PERFORMANCE LAB
                        </span>

                    </div>

                </div>

            </section>

            <section className="footer-bottom">

                <p>
                    COPYRIGHT © 2026. THE PERFORMANCE LAB
                </p>

                <div className="footer-legal">

                    <a href="#">
                        PRIVACY POLICY
                    </a>

                    <a href="#">
                        TERMS &amp; CONDITIONS
                    </a>

                </div>

                <p className="footer-dev">
                    DEVELOPED BY <span>.RAW</span>
                </p>

            </section>

        </footer>
    );
};

export default Footer;
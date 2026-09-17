import "../styles/FinalCTA.css";

import gymFloor from "../assets/gym-floor.webp";

const FinalCTA = () => {
    return (
        <section className="final-cta">


            <div className="final-cta-bg">
                <img
                    src={gymFloor}
                    alt="Performance Lab"
                />
            </div>
            <div className="final-cta-overlay"></div>



            <div className="final-cta-title">

                <span className="line line-1">
                    THE
                </span>

                <span className="line line-2">
                    PERFORMANCE
                </span>

                <span className="line line-3">
                    LAB
                </span>

            </div>


            {/* CTA Button */}

            <a
                href="#"
                className="final-cta-button"
            >
                <span>
                    BOOK A CONSULTATION
                </span>

                <span className="cta-arrow">
                    →
                </span>
            </a>

        </section>
    );
};

export default FinalCTA;
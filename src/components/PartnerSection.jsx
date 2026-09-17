import "../styles/PartnerSection.css";

import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import p3 from "../assets/p3.svg";
import p4 from "../assets/p4.svg";
import p6 from "../assets/p6.svg";
import p7 from "../assets/p7.svg";

const PartnerSection = () => {
    return (
        <section className="partners-section">

            <div className="partners-track">

                <div className="partner-logo">
                    <img src={p1} alt="Partner 1" />
                </div>

                <div className="partner-logo">
                    <img src={p2} alt="Partner 2" />
                </div>

                <div className="partner-logo">
                    <img src={p3} alt="Partner 3" />
                </div>

                <div className="partner-logo">
                    <img src={p4} alt="Partner 4" />
                </div>

                <div className="partner-logo">
                    <img src={p6} alt="Partner 6" />
                </div>

                <div className="partner-logo">
                    <img src={p7} alt="Partner 7" />
                </div>
                
                <div className="partner-logo">
                    <img src={p1} alt="Partner 1" />
                </div>

                <div className="partner-logo">
                    <img src={p2} alt="Partner 2" />
                </div>

                <div className="partner-logo">
                    <img src={p3} alt="Partner 3" />
                </div>

                <div className="partner-logo">
                    <img src={p4} alt="Partner 4" />
                </div>

                <div className="partner-logo">
                    <img src={p6} alt="Partner 6" />
                </div>

                <div className="partner-logo">
                    <img src={p7} alt="Partner 7" />
                </div>

            </div>

        </section>
    );
};

export default PartnerSection;
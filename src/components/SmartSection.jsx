import "../styles/SmartSection.css";

import i1 from "../assets/i1.webp";
import i2 from "../assets/i2.webp";
import i3 from "../assets/i3.webp";
import i4 from "../assets/i4.webp";
import i5 from "../assets/i5.webp";
import i6 from "../assets/i6.webp";

const SmartSection = () => {
    return (
        <section className="smart-section">


            <div className="smart-image image-1">
                <img src={i1} alt="" />
            </div>

            <div className="smart-image image-2">
                <img src={i2} alt="" />
            </div>

            <div className="smart-image image-3">
                <img src={i3} alt="" />
            </div>

            <div className="smart-image image-4">
                <img src={i4} alt="" />
            </div>

            <div className="smart-image image-5">
                <img src={i5} alt="" />
            </div>

            <div className="smart-image image-6">
                <img src={i6} alt="" />
            </div>



            <div className="smart-intro">

                <p>WHAT IS THE PERFORMANCE LAB</p>

                <h2>
                    Helping you move better,
                    <span>recover smarter </span> and perform at your best
                </h2>
            </div>
            <div className="smart-card">
                <div className="smart-card-content">

                    <p className="card-label">
                        THE SMART WAY TO YOUR GOALS
                    </p>

                    <h3>
                        Reach your goals. Whether you’re pursuing
                        professional sport, building lifelong strength,
                        or recovering from injury, we deliver the
                        expertise, technology, and guidance to help
                        you reach your full potential.
                    </h3>

                    <p className="card-description">
                        Discover your natural talents and weaknesses,
                        receive personalized training, and rebuild your
                        strength and flexibility after injury. Using the
                        latest technology, we don’t just collect data,
                        we translate it into clear insight and context,
                        helping you understand exactly what it means
                        and reach your maximum potential.
                    </p>

                    <div className="card-button">

                        <a href="#">
                            LEARN MORE ABOUT US
                        </a>

                        <a href="#" className="arrow">
                            →
                        </a>

                    </div>

                </div>


                <div className="big-text">
                    THE SMART
                    <br />
                    WAY TO
                    <br />
                    YOUR GOALS
                </div>

            </div>

        </section>
    );
};

export default SmartSection;
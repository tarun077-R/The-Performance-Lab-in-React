import "../styles/SmartSection.css";
import SkeletonImage from "./SkeletonImage";
import SkeletonText from "./SkeletonText";

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
                <SkeletonImage src={i1} alt="" tone="light" />
            </div>

            <div className="smart-image image-2">
                <SkeletonImage src={i2} alt="" tone="light" />
            </div>

            <div className="smart-image image-3">
                <SkeletonImage src={i3} alt="" tone="light" />
            </div>

            <div className="smart-image image-4">
                <SkeletonImage src={i4} alt="" tone="light" />
            </div>

            <div className="smart-image image-5">
                <SkeletonImage src={i5} alt="" tone="light" />
            </div>

            <div className="smart-image image-6">
                <SkeletonImage src={i6} alt="" tone="light" />
            </div>



            <div className="smart-intro">

                <SkeletonText as="p" lines={1}>
                    WHAT IS THE PERFORMANCE LAB
                </SkeletonText>

                <SkeletonText as="h2" lines={3}>
                    Helping you move better,
                    <span>recover smarter </span> and perform at your best
                </SkeletonText>
            </div>
            <div className="smart-card">
                <div className="smart-card-content">

                    <SkeletonText as="p" className="card-label" lines={1}>
                        THE SMART WAY TO YOUR GOALS
                    </SkeletonText>

                    <SkeletonText as="h3" lines={4} widths={["100%", "100%", "100%", "46%"]}>
                        Reach your goals. Whether you’re pursuing
                        professional sport, building lifelong strength,
                        or recovering from injury, we deliver the
                        expertise, technology, and guidance to help
                        you reach your full potential.
                    </SkeletonText>

                    <SkeletonText as="p" className="card-description" lines={6} widths={["100%", "100%", "100%", "100%", "100%", "34%"]}>
                        Discover your natural talents and weaknesses,
                        receive personalized training, and rebuild your
                        strength and flexibility after injury. Using the
                        latest technology, we don’t just collect data,
                        we translate it into clear insight and context,
                        helping you understand exactly what it means
                        and reach your maximum potential.
                    </SkeletonText>

                    <div className="card-button">

                        <SkeletonText as="a" href="#" tone="light" lines={1}>
                            LEARN MORE ABOUT US
                        </SkeletonText>

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
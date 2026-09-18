import runnerImage from "../assets/runner-optimized.webp";
import "../styles/HeroSection.css";

import SkeletonText from "./SkeletonText";
const HeroSection = () => {
    return (
       <section
  className="hero"
  style={{ backgroundImage: `url(${runnerImage})` }}
>

            <div className="hero-overlay"></div>

            <div className="hero-container">

                <div className="hero-text-content animate-up">
                    <SkeletonText as="h1" lines={3}>
                        UNLOCK<br />
                        NEXT LEVEL<br />
                        PERFORMANCE
                    </SkeletonText>
                </div>

                <div className="hero-side-card animate-up-delayed">

                    <SkeletonText as="p" lines={4} widths={["100%", "100%", "88%", "45%"]}>                        Data-driven testing, training, and advanced therapy
                        to help you reach your physical peak — whether you're
                        a professional athlete or just getting started.
                    </SkeletonText>
<div className="hero-button">
    <SkeletonText as="a" href="#" className="accent-btn" tone="accent" lines={1}>
        UNLOCK YOUR POTENTIAL
    </SkeletonText>

    <span className="arrow accent-btn">
        →
    </span>
</div>

                </div>

            </div>

        </section>
    );
};

export default HeroSection;
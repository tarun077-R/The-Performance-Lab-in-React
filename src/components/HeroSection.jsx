import "../styles/HeroSection.css"
const HeroSection = () => {
    return (
        <section className="hero">

            <div className="hero-overlay"></div>

            <div className="hero-container">

                <div className="hero-text-content animate-up">
                    <h1>
                        UNLOCK<br />
                        NEXT LEVEL<br />
                        PERFORMANCE
                    </h1>
                </div>

                <div className="hero-side-card animate-up-delayed">

                    <p>
                        Data-driven testing, training, and advanced therapy
                        to help you reach your physical peak — whether you're
                        a professional athlete or just getting started.
                    </p>
<div className="hero-button">
    <a href="#" className="accent-btn">
        UNLOCK YOUR POTENTIAL
    </a>

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
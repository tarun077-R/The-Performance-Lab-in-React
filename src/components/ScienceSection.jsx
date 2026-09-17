import React from "react";
import "../styles/ScienceSection.css";

const ScienceSection = () => {
    return (
        <section className="science-section">


            <div className="science-title">

                <span className="science-number">#1</span>

                <h2>
                    SPORTS
                    <br />
                    SCIENCE
                    <br />
                    CENTRE IN
                    <br />
                    CANADA
                </h2>

            </div>



            <div className="science-content">

                <div className="science-main">

                    <p className="science-label">
                        THE PERFORMANCE LAB TEAM
                    </p>

                    <h3>
                        Our team brings together world-class expertise
                        across sport science, strength &amp; conditioning,
                        and rehab therapy, each specialist at the top
                        of their field.
                    </h3>

                    <p className="science-description">
                        We’ve worked inside Olympic programs, Grand Slam
                        tennis, NHL locker rooms, and on MLB pitching
                        mounds. Our team includes Tennis Canada’s national
                        strength and conditioning coach, specialists with
                        decades of combined experience treating professional
                        athletes, and practitioners trusted by some of the
                        most demanding training environments in sport.
                    </p>

                </div>


                <div className="science-bottom">

                    <p>
                        This isn’t a gym with credentials on the wall.
                        It’s a team that’s done the work at the highest
                        level, and now brings that same standard to
                        every client who walks through our doors.
                    </p>


                    <a href="#" className="science-button">

                        <span>
                            MEET THE PERFORMANCE LAB TEAM
                        </span>

                        <span className="science-arrow">
                            →
                        </span>

                    </a>

                </div>

            </div>

        </section>
    );
};

export default ScienceSection;
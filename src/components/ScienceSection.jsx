import React from "react";
import "../styles/ScienceSection.css";
import SkeletonText from "./SkeletonText";

const ScienceSection = () => {
    return (
        <section className="science-section">


            <div className="science-title">

                <SkeletonText as="span" className="science-number" lines={1}>
                    #1
                </SkeletonText>

                <SkeletonText as="h2" lines={4}>
                    SPORTS
                    <br />
                    SCIENCE
                    <br />
                    CENTRE IN
                    <br />
                    CANADA
                </SkeletonText>

            </div>



            <div className="science-content">

                <div className="science-main">

                    <SkeletonText as="p" className="science-label" lines={1}>
                        THE PERFORMANCE LAB TEAM
                    </SkeletonText>

                    <SkeletonText as="h3" lines={3} widths={["100%", "100%", "64%"]}>
                        Our team brings together world-class expertise
                        across sport science, strength &amp; conditioning,
                        and rehab therapy, each specialist at the top
                        of their field.
                    </SkeletonText>

                    <SkeletonText as="p" className="science-description" lines={6} widths={["100%", "100%", "100%", "100%", "100%", "38%"]}>
                        We’ve worked inside Olympic programs, Grand Slam
                        tennis, NHL locker rooms, and on MLB pitching
                        mounds. Our team includes Tennis Canada’s national
                        strength and conditioning coach, specialists with
                        decades of combined experience treating professional
                        athletes, and practitioners trusted by some of the
                        most demanding training environments in sport.
                    </SkeletonText>

                </div>


                <div className="science-bottom">

                    <SkeletonText as="p" lines={3} widths={["100%", "100%", "52%"]}>
                        This isn’t a gym with credentials on the wall.
                        It’s a team that’s done the work at the highest
                        level, and now brings that same standard to
                        every client who walks through our doors.
                    </SkeletonText>


                    <a href="#" className="science-button">

                        <SkeletonText as="span" tone="light" lines={1}>
                            MEET THE PERFORMANCE LAB TEAM
                        </SkeletonText>

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
import { useEffect, useRef } from "react";
import "../styles/Stats.css";
import SkeletonText from "./SkeletonText";

const Stats = () => {
    const statsSectionRef = useRef(null);

    useEffect(() => {
        const statsSection = statsSectionRef.current;

        if (!statsSection) {
            return;
        }

        const stats =
            statsSection.querySelectorAll(".stat");

        let smoothProgress = 0;
        let animationFrame;


        function clamp(value, min, max) {
            return Math.max(
                min,
                Math.min(max, value)
            );
        }


        function ease(t) {
            return t * t * (3 - 2 * t);
        }


        function animateStats() {

            const rect =
                statsSection.getBoundingClientRect();


            const total =
                statsSection.offsetHeight -
                window.innerHeight;


            let progress =
                total > 0
                    ? -rect.top / total
                    : 0;


            progress =
                clamp(progress, 0, 1);

            smoothProgress +=
                (progress - smoothProgress) * 0.075;

            stats.forEach((stat, index) => {

                const isLast =
                    index === stats.length - 1;


                const start =
                    index * 0.22;


                const end =
                    isLast
                        ? 1.05
                        : start + 0.30;


                let p =
                    (smoothProgress - start) /
                    (end - start);


                p =
                    clamp(p, 0, 1);


                let y = 0;
                let opacity = 1;


                if (isLast) {

                    if (p < 0.22) {

                        const enter =
                            ease(p / 0.22);


                        y =
                            35 - enter * 35;


                        opacity =
                            enter;

                    } else {

                        y = 0;
                        opacity = 1;

                    }

                }


                else {

                    /* ENTER */

                    if (p < 0.25) {

                        const enter =
                            ease(p / 0.25);


                        y =
                            35 - enter * 35;

                    }


                    else if (p < 0.78) {

                        y = 0;

                    }


                    else {

                        const exit =
                            ease(
                                (p - 0.78) / 0.22
                            );


                        y =
                            -(exit * 35);

                    }



                    if (p < 0.12) {

                        opacity =
                            ease(p / 0.12);

                    }

                    else if (p > 0.86) {

                        opacity =
                            1 -
                            ease(
                                (p - 0.86) / 0.14
                            );

                    }

                }


                stat.style.transform =
                    `translate3d(0, ${y}%, 0)`;


                stat.style.opacity =
                    opacity;

            });


            animationFrame =
                requestAnimationFrame(
                    animateStats
                );
        }


        animateStats();


        return () => {

            cancelAnimationFrame(
                animationFrame
            );

        };

    }, []);


    return (
        <section
            className="stats-section"
            ref={statsSectionRef}
        >

            <div className="stats-sticky">


                <SkeletonText as="div" className="stats-label" lines={1}>
                    ABOUT US / NUMBERS
                </SkeletonText>


                <article className="stat stat-1">

                    <SkeletonText as="div" className="stat-title" lines={3}>
                        YEARS IN<br />
                        PROFESSIONAL<br />
                        SPORTS
                    </SkeletonText>


                    <SkeletonText as="div" className="stat-arrow" lines={1}>→</SkeletonText>


                    <div className="stat-number">

                        <SkeletonText as="small" lines={1}>
                            YEARS
                        </SkeletonText>

                        <SkeletonText as="strong" lines={1}>
                            22+
                        </SkeletonText>

                    </div>

                </article>

                <article className="stat stat-2">

                    <SkeletonText as="div" className="stat-title" lines={3}>
                        PROFESSIONAL<br />
                        LEAGUES<br />
                        SERVED
                    </SkeletonText>


                    <div className="stat-leagues">

                        {["NHL", "MLB", "NBA", "MLS", "ATP"].map((league) => (
                            <SkeletonText as="span" key={league} lines={1}>
                                {league}
                            </SkeletonText>
                        ))}

                    </div>


                    <SkeletonText as="div" className="stat-arrow" lines={1}>→</SkeletonText>


                    <div className="stat-number">

                        <SkeletonText as="small" lines={1}>
                            LEAGUES
                        </SkeletonText>

                        <SkeletonText as="strong" lines={1}>
                            10+
                        </SkeletonText>

                    </div>

                </article>



                <article className="stat stat-3">

                    <SkeletonText as="div" className="stat-title" lines={3}>
                        NCAA<br />
                        DIVISION 1<br />
                        COMMITMENTS
                    </SkeletonText>


                    <SkeletonText as="div" className="stat-arrow" lines={1}>→</SkeletonText>


                    <div className="stat-number">

                        <SkeletonText as="small" lines={1}>
                            ACHIEVED OVER<br />
                            $1M+ SCHOLARSHIPS
                        </SkeletonText>

                        <SkeletonText as="strong" lines={1}>
                            100+
                        </SkeletonText>

                    </div>

                </article>


                <article className="stat stat-4">

                    <SkeletonText as="div" className="stat-title" lines={3}>
                        OLYMPIC<br />
                        PROGRAMS<br />
                        CONSULTED
                    </SkeletonText>


                    <div className="stat-programs">

                        {[
                            "USA TRACK CYCLING",
                            "USA BOBSLED",
                            "USA SKELETON",
                            "TENNIS CANADA",
                            "TEAM CANADA POLE VAULT",
                            "TEAM CANADA SOFTBALL",
                            "TEAM CANADA HOCKEY",
                            "& MORE",
                        ].map((program) => (
                            <SkeletonText as="span" key={program} lines={1}>
                                {program}
                            </SkeletonText>
                        ))}

                    </div>


                    <SkeletonText as="div" className="stat-arrow" lines={1}>→</SkeletonText>


                    <div className="stat-number">

                        <SkeletonText as="small" lines={1}>
                            PROGRAMS
                        </SkeletonText>

                        <SkeletonText as="strong" lines={1}>
                            85+
                        </SkeletonText>

                    </div>

                </article>


            </div>

        </section>
    );
};

export default Stats;
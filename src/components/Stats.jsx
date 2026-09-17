import { useEffect, useRef } from "react";
import "../styles/Stats.css";

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


                <div className="stats-label">
                    ABOUT US / NUMBERS
                </div>


                <article className="stat stat-1">

                    <div className="stat-title">
                        YEARS IN<br />
                        PROFESSIONAL<br />
                        SPORTS
                    </div>


                    <div className="stat-arrow">
                        →
                    </div>


                    <div className="stat-number">

                        <small>
                            YEARS
                        </small>

                        <strong>
                            22+
                        </strong>

                    </div>

                </article>

                <article className="stat stat-2">

                    <div className="stat-title">
                        PROFESSIONAL<br />
                        LEAGUES<br />
                        SERVED
                    </div>


                    <div className="stat-leagues">

                        <span>NHL</span>
                        <span>MLB</span>
                        <span>NBA</span>
                        <span>MLS</span>
                        <span>ATP</span>

                    </div>


                    <div className="stat-arrow">
                        →
                    </div>


                    <div className="stat-number">

                        <small>
                            LEAGUES
                        </small>

                        <strong>
                            10+
                        </strong>

                    </div>

                </article>



                <article className="stat stat-3">

                    <div className="stat-title">
                        NCAA<br />
                        DIVISION 1<br />
                        COMMITMENTS
                    </div>


                    <div className="stat-arrow">
                        →
                    </div>


                    <div className="stat-number">

                        <small>
                            ACHIEVED OVER<br />
                            $1M+ SCHOLARSHIPS
                        </small>

                        <strong>
                            100+
                        </strong>

                    </div>

                </article>


                <article className="stat stat-4">

                    <div className="stat-title">
                        OLYMPIC<br />
                        PROGRAMS<br />
                        CONSULTED
                    </div>


                    <div className="stat-programs">

                        <span>
                            USA TRACK CYCLING
                        </span>

                        <span>
                            USA BOBSLED
                        </span>

                        <span>
                            USA SKELETON
                        </span>

                        <span>
                            TENNIS CANADA
                        </span>

                        <span>
                            TEAM CANADA POLE VAULT
                        </span>

                        <span>
                            TEAM CANADA SOFTBALL
                        </span>

                        <span>
                            TEAM CANADA HOCKEY
                        </span>

                        <span>
                            &amp; MORE
                        </span>

                    </div>


                    <div className="stat-arrow">
                        →
                    </div>


                    <div className="stat-number">

                        <small>
                            PROGRAMS
                        </small>

                        <strong>
                            85+
                        </strong>

                    </div>

                </article>


            </div>

        </section>
    );
};

export default Stats;
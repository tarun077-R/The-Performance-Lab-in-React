import { useEffect, useRef } from "react";
import "../styles/PerformanceMotion.css";


const PerformanceMotion = () => {
    const motionSectionRef = useRef(null);

    useEffect(() => {
        const motionSection = motionSectionRef.current;

        if (!motionSection) {
            return;
        }

        const motionImage =
            motionSection.querySelector(".motion-image");

        const motionBgText =
            motionSection.querySelector(".motion-bg-text");

        const motionTitles =
            motionSection.querySelectorAll(".motion-title");

        const motionLine =
            motionSection.querySelector(".motion-line");

        let motionProgress = 0;
        let motionTarget = 0;
        let animationFrame;

        function motionClamp(value, min, max) {
            return Math.max(
                min,
                Math.min(max, value)
            );
        }

        function motionEase(value) {
            return value * value * (3 - 2 * value);
        }

        function updateMotion() {

            const rect =
                motionSection.getBoundingClientRect();

            const total =
                motionSection.offsetHeight -
                window.innerHeight;

            motionTarget =
                total > 0
                    ? -rect.top / total
                    : 0;

            motionTarget =
                motionClamp(
                    motionTarget,
                    0,
                    1
                );

            motionProgress +=
                (motionTarget - motionProgress) * 0.08;


            if (motionBgText) {

                const bgMove =
                    motionProgress * -35;

                motionBgText.style.transform =
                    `translate3d(${bgMove}vw, -50%, 0)`;
            }



            if (motionImage) {

                let imageProgress =
                    motionClamp(
                        (motionProgress - 0.12) / 0.42,
                        0,
                        1
                    );

                imageProgress =
                    motionEase(imageProgress);

                const imageScale =
                    0.72 +
                    imageProgress * 0.28;

                motionImage.style.opacity =
                    imageProgress;

                motionImage.style.transform =
                    `translate(-50%, -50%) scale(${imageScale})`;



                const imageElement =
                    motionImage.querySelector("img");

                if (imageElement) {

                    const imageMove =
                        (motionProgress - 0.5) * -70;

                    imageElement.style.transform =
                        `translate3d(0, ${imageMove}px, 0) scale(1.08)`;
                }
            }

            motionTitles.forEach(
                (title, index) => {

                    const start =
                        index * 0.20;

                    const progress =
                        motionClamp(
                            (motionProgress - start) / 0.42,
                            0,
                            1
                        );

                    const eased =
                        motionEase(progress);

                    let y =
                        80 -
                        eased * 80;



                    if (progress > 0.72) {

                        const exit =
                            motionEase(
                                (progress - 0.72) / 0.28
                            );

                        y =
                            -(exit * 45);
                    }

                    let opacity = 1;

                    if (progress < 0.15) {

                        opacity =
                            motionEase(
                                progress / 0.15
                            );

                    } else if (progress > 0.82) {

                        opacity =
                            1 -
                            motionEase(
                                (progress - 0.82) / 0.18
                            );
                    }

                    title.style.opacity =
                        opacity;

                    title.style.transform =
                        `translate3d(-50%, ${y}vh, 0)`;
                }
            );
            if (motionLine) {

                motionLine.style.width =
                    `${motionProgress * 100}%`;
            }


            animationFrame =
                requestAnimationFrame(updateMotion);
        }

        updateMotion();

        return () => {
            cancelAnimationFrame(animationFrame);
        };

    }, []);

    return (
        <section
            className="motion-section"
            ref={motionSectionRef}
        >

            <div className="motion-sticky">


                <div className="motion-label">
                    PERFORMANCE / IN MOTION
                </div>



                <div className="motion-bg-text">
                    PERFORMANCE
                </div>

                <div className="motion-title motion-title-one">
                    TRAIN
                </div>

                <div className="motion-title motion-title-two">
                    TEST
                </div>

                <div className="motion-title motion-title-three">
                    PERFORM
                </div>

                <div className="motion-info">

                    <span>
                        01 / 03
                    </span>

                    <p>
                        PERFORMANCE IS NOT
                        <br />
                        A DESTINATION.
                    </p>

                </div>

                <div className="motion-line"></div>

                <div className="motion-bottom">

                    <span>
                        THE PERFORMANCE LAB
                    </span>

                    <span>
                        SPORT / SCIENCE / PERFORMANCE
                    </span>

                </div>

            </div>

        </section>
    );
};

export default PerformanceMotion;
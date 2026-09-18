import "../styles/FinalCTA.css";
import SkeletonImage from "./SkeletonImage";
import SkeletonText from "./SkeletonText";

import gymFloor from "../assets/gym-floor.webp";
import Popup from "./PopUp";
import { useState } from "react";

const FinalCTA = () => {
        const [popupOpen, setPopupOpen] = useState(false);
        const [consultation, setConsultation] = useState(false);
        const [services, setServices] = useState(false);
    return (
        <>
        <section className="final-cta">


            <div className="final-cta-bg">
                <SkeletonImage
                    src={gymFloor}
                    alt="Performance Lab"
                    tone="dark"
                    
                />
            </div>
            <div className="final-cta-overlay"></div>



            <div className="final-cta-title">

                <SkeletonText as="span" className="line line-1" lines={1}>
                    THE
                </SkeletonText>

                <SkeletonText as="span" className="line line-2" lines={1}>
                    PERFORMANCE
                </SkeletonText>

                <SkeletonText as="span" className="line line-3" lines={1}>
                    LAB
                </SkeletonText>

            </div>


            {/* CTA Button */}

            <a
                href="#"
                className="final-cta-button"
            >
                <SkeletonText as="span" tone="light" lines={1}  onClick={() =>{setPopupOpen(true); setConsultation(true)}}>
                    BOOK A CONSULTATION
                </SkeletonText>

                <span className="cta-arrow">
                    →
                </span>
            </a>

        </section>
         {popupOpen && (
                <Popup
                consultation={consultation}
                services={services}
                    onClose={() => {
                        setPopupOpen(false);
                        setServices(false);
                        setConsultation(false)}}
                />
            )}
            </>
    );
};

export default FinalCTA;
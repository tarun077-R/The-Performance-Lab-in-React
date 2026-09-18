import "../styles/Popup.css";

const Popup = ({ consultation, services, onClose }) => {

    return (
        <div className="popup-overlay">

            <div className="popup">

                <button
                    className="popup-close"
                    onClick={onClose}
                    aria-label="Close popup"
                >
                    ×
                </button>

                {consultation && (
                    <div className="popup-content">

                        <span className="popup-label">
                            THE PERFORMANCE LAB
                        </span>

                        <h2>
                            BOOK A<br />
                            CONSULTATION
                        </h2>

                        <p className="popup-description">
                            Take the first step toward better performance,
                            stronger movement, and long-term results.
                            Connect with our team to discuss your goals
                            and build a plan designed around you.
                        </p>

                        <form className="consultation-form">

                            <div className="form-row">

                                <input
                                    type="text"
                                    placeholder="YOUR NAME"
                                />

                                <input
                                    type="email"
                                    placeholder="YOUR EMAIL"
                                />

                            </div>

                            <div className="form-row">

                                <input
                                    type="tel"
                                    placeholder="PHONE NUMBER"
                                />

                                <select defaultValue="">
                                    <option value="" disabled>
                                        SELECT SERVICE
                                    </option>

                                    <option value="testing">
                                        Testing
                                    </option>

                                    <option value="training">
                                        Training
                                    </option>

                                    <option value="therapy">
                                        Therapy
                                    </option>

                                    <option value="longevity">
                                        Longevity
                                    </option>
                                </select>

                            </div>

                            <textarea
                                placeholder="TELL US ABOUT YOUR GOALS"
                                rows="4"
                            />

                            <button
                                type="submit"
                                className="popup-submit"
                            >
                                REQUEST A CONSULTATION →
                            </button>

                        </form>

                    </div>
                )}

                {services && (
                    <div className="popup-content">

                        <span className="popup-label">
                            WHAT WE DO
                        </span>

                        <h2>
                            OUR<br />
                            SERVICES
                        </h2>

                        <p className="popup-description">
                            A complete approach to human performance,
                            combining science, training, recovery,
                            and long-term health.
                        </p>

                        <div className="services-list">

                            <div className="service-item">
                                <span>01</span>
                                <div>
                                    <h3>TESTING</h3>
                                    <p>
                                        Assess your performance and
                                        understand what your body needs.
                                    </p>
                                </div>
                            </div>

                            <div className="service-item">
                                <span>02</span>
                                <div>
                                    <h3>TRAINING</h3>
                                    <p>
                                        Structured training designed to
                                        improve strength, speed, and movement.
                                    </p>
                                </div>
                            </div>

                            <div className="service-item">
                                <span>03</span>
                                <div>
                                    <h3>THERAPY</h3>
                                    <p>
                                        Targeted support for recovery,
                                        mobility, and better movement.
                                    </p>
                                </div>
                            </div>

                            <div className="service-item">
                                <span>04</span>
                                <div>
                                    <h3>LONGEVITY</h3>
                                    <p>
                                        Build sustainable habits for
                                        long-term health and performance.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
};

export default Popup;
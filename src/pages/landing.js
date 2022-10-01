import "../scss/landing.scss";
import { Link } from "react-router-dom";
const Landing = () => {
    return (
        <section className="landing-sec">
            <div className="container">
                <div className="row">
                    <div className="col col-2">
                        <div className="content">
                            <div className="heading">
                                <h2>
                                    Imagine if <span>Snapchat</span> had events.
                                </h2>
                            </div>
                            <p>Easily host and share events with your friends across any social media.</p>
                        </div>
                        <div className="actions desktop-btn">
                            <Link to="/create">
                                <button className="primary_btn">🎉 Create my event</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col col-1">
                        <div className="event-image"></div>
                        <div className="actions smaller-btn">
                            <Link to="/create">
                                <button className="primary_btn">🎉 Create my event</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Landing;

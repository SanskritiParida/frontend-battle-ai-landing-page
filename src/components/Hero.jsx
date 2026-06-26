import "./Hero.css";
import ChartIcon from "../assets/SVGs/chart-pie.svg";
import CogIcon from "../assets/SVGs/cog-8-tooth.svg";
import GrowthIcon from "../assets/SVGs/arrow-trending-up.svg";
import CubeIcon from "../assets/SVGs/cube-16-solid.svg";
function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <span className="hero-badge">
                        AI Workflow Platform
                    </span>

                    <h1> Build AI Workflows <br /> 
                       <span>at Enterprise Scale</span> 
                    </h1>

                    <p>
                        Automate your business using intelligent AI agents and real-time
                        analytics.
                    </p>

                    <div className="hero-buttons">
                        <button type="button" className="primary-btn">
                            Start Free Trial
                        </button>

                        <button type="button" className="secondary-btn">
                            ▶ Watch Demo
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">✓ 10,000+ Teams</div>
                        <div className="stat">✓ 99.9% Uptime</div>
                        <div className="stat">✓ Enterprise Ready</div>
                    </div>
                </div>

                <div className="hero-visual">

                    <div className="hero-card">
                        <div className="icon-wrapper">
                            <img src={ChartIcon} alt="Analytics" />
                        </div>

                        <h3>AI Analytics</h3>

                        <p>Monitor real-time business insights.</p>
                    </div>

                    <div className="hero-card">
                        <div className="icon-wrapper">
                            <img src={CogIcon} alt="Automation" />
                        </div>

                        <h3>Automation</h3>

                        <p>Automate repetitive workflows with AI.</p>
                    </div>

                    <div className="hero-card">
                        <div className="icon-wrapper">
                            <img src={GrowthIcon} alt="Growth" />
                        </div>

                        <h3>Predictive Growth</h3>

                        <p>Predict trends and accelerate business growth.</p>
                    </div>

                    <div className="hero-card">
                        <div className="icon-wrapper">
                            <img src={CubeIcon} alt="Infrastructure" />
                        </div>

                        <h3>Cloud Infrastructure</h3>

                        <p>Secure cloud platform built to scale.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;
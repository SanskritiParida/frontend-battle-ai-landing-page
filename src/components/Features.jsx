import { useState } from "react";
import "./Features.css";

import CogIcon from "../assets/SVGs/cog-8-tooth.svg";
import ChartIcon from "../assets/SVGs/chart-pie.svg";
import GrowthIcon from "../assets/SVGs/arrow-trending-up.svg";
import CubeIcon from "../assets/SVGs/cube-16-solid.svg";

function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "AI Workflow Automation",
      description:
        "Automate repetitive business tasks with intelligent AI agents that adapt to your workflow.",
      icon: CogIcon,
    },
    {
      title: "Real-time Analytics",
      description:
        "Monitor live dashboards and actionable insights with real-time AI reporting.",
      icon: ChartIcon,
    },
    {
      title: "Predictive Growth",
      description:
        "Forecast trends and identify opportunities using advanced AI-powered analytics.",
      icon: GrowthIcon,
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Built on secure cloud architecture that scales from startups to enterprise deployments.",
      icon: CubeIcon,
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-heading">
          <span className="badge">FEATURES</span>

          <h2>Powerful AI capabilities built for modern businesses</h2>

          <p>
            Everything you need to automate workflows, analyze data and scale
            your business using next-generation AI.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`feature-card ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
              tabIndex={0}
              aria-expanded={activeIndex === index}
            >
              <div className="icon-box">
                <img src={feature.icon} alt={feature.title} />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <button className="learn-more">
                Learn More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
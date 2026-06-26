import { useState } from "react";
import "./Pricing.css";
import pricingPlans from "../data/pricing";
import calculatePrice from "../utils/calculatePrice";

function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");

  const currencySymbol = {
    USD: "$",
    EUR: "€",
    INR: "₹",
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">

        <div className="pricing-header">
          <span className="pricing-tag">PRICING</span>

          <h2>Simple, Transparent Pricing</h2>

          <p>
            Choose the perfect plan for your business. Upgrade anytime as your
            team grows.
          </p>
        </div>

        <div className="pricing-controls">

          <div className="billing-toggle">
            <button
              className={billing === "monthly" ? "active" : ""}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>

            <button
              className={billing === "annual" ? "active" : ""}
              onClick={() => setBilling("annual")}
            >
              Annual
            </button>
          </div>

          <div className="currency-selector">

            {["USD", "EUR", "INR"].map((item) => (
              <button
                key={item}
                className={currency === item ? "active" : ""}
                onClick={() => setCurrency(item)}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        <div className="pricing-grid">

          {pricingPlans.map((plan) => {

            const monthly = plan.monthlyPrice[currency];

            const displayPrice = calculatePrice(monthly, billing);

            return (

              <article
                key={plan.id}
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
              >

                {plan.popular && (
                  <div className="popular-badge">
                    Most Popular
                  </div>
                )}

                <h3>{plan.name}</h3>

                <p className="plan-description">
                  {plan.description}
                </p>

                <div className="price">

                  <span className="currency">
                    {currencySymbol[currency]}
                  </span>

                  <span className="amount">
                    {displayPrice}
                  </span>

                  <span className="duration">
                    / {billing === "monthly" ? "month" : "year"}
                  </span>

                </div>

                {billing === "annual" && (
                  <p className="discount">
                    Save 20% with yearly billing
                  </p>
                )}

                <ul className="feature-list">

                  {plan.features.map((feature) => (
                    <li key={feature}>
                      ✓ {feature}
                    </li>
                  ))}

                </ul>

                <button className="plan-button">
                  {plan.buttonText}
                </button>

              </article>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Pricing;
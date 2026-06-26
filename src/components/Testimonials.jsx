import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Acme Inc.",
    review:
      "NeuroFlow AI completely transformed our workflow. We reduced manual work by nearly 70% while improving productivity.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Founder",
    company: "DataSpark",
    review:
      "The analytics dashboard is outstanding. The AI automation saved our team hours every single week.",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Operations Lead",
    company: "CloudCore",
    review:
      "Beautiful interface, reliable performance, and excellent support. One of the best AI platforms we've used.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">

        <div className="testimonial-heading">
          <span className="testimonial-tag">
            TESTIMONIALS
          </span>

          <h2>Trusted by businesses worldwide</h2>

          <p>
            Thousands of companies rely on our AI platform to automate
            workflows and accelerate growth.
          </p>
        </div>

        <div className="testimonial-grid">

          {testimonials.map((item) => (

            <article
              className="testimonial-card"
              key={item.id}
            >

              <div className="stars">
                ★★★★★
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <div className="author">

                <div className="avatar">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h4>{item.name}</h4>

                  <span>
                    {item.role}
                  </span>

                  <small>{item.company}</small>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
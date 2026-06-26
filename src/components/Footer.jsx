import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-brand">
          <h2>NeuroFlow AI</h2>
          <p>
            Empowering businesses with intelligent AI automation,
            predictive analytics, and scalable cloud solutions.
          </p>
        </div>

        <div className="footer-links">
          <h3>Product</h3>

          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
        </div>

        <div className="footer-links">
          <h3>Company</h3>

          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer-links">
          <h3>Support</h3>

          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} NeuroFlow AI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
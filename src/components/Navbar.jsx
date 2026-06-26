import "./Navbar.css";
function Navbar() {
  return (
    <header>
      <nav className="container">
        <h2>NeuroFlow AI</h2>

        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Reviews</a></li>
        </ul>

        <button>Get Started</button>
      </nav>
    </header>
  );
}

export default Navbar;
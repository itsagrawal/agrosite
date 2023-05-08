export default function Footer() {
  return (
    <footer>
      <div className="col">
        <a href="#" className="brand">
          <span>Agro</span>Site
        </a>
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> A4 102 DM Tower, Raipur, India
        </p>
        <p>
          <strong>Phone:</strong> +91 7000 90 1447 /+91 7000 90 1447
        </p>
        <p>
          <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="./pages/about.html">About us</a>
        <a href="./pages/about.html">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="./pages/contact.html">Contact Us</a>
      </div>
      <div className="col">
        <h4>My Accounts</h4>
        <a href="#">Sign in</a>
        <a href="./pages/cart.html">View Cart</a>
        <a href="#">My Wislist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src="./assets/app.jpg" alt="" />
          <img src="./assets/play.jpg" alt="" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src="./assets/pay.png " alt="" />
      </div>
      <div className="copyright">
        <p>2023, AgroSite</p>
      </div>
    </footer>
  );
}

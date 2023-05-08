import Navbar from "../components/navbar/Navbar";
import Helmet from "react-helmet";
import NewsLetter from "../components/newsletter/NewsLetter";
import Footer from "../components/footer/Footer";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Agrosite - Contact Us</title>
      </Helmet>
      <Navbar />
      <Header />
      <ContactDet />
      <CForm />
      <NewsLetter />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <section id="about-nav">
      <h2>#ContactUs</h2>
      <p>LEAVE A MESSAGE.We love to hear from you!</p>
    </section>
  );
}

function ContactDet() {
  return (
    <section id="contact-details" className="section-p1">
      <div className="details">
        <span>GET IN TOUCH</span>
        <h2>Visit one of our devloper hub or contact us today</h2>
        <h3>Head office</h3>
        <div>
          <li>
            <i className="fal fa-map"></i>
            <p>A4 102 DM Tower Rto Raipur India</p>
          </li>
          <li>
            <i className="fal fa-envelope"></i>
            <p>prabhatchaubey803@gmail.com</p>
          </li>
          <li>
            <i className="fal fa-phone-alt"></i>
            <p>+91 7000901447 || +91 9819871294</p>
          </li>
          <li>
            <i className="fal fa-clock"></i>
            <p>Monday to Saturday: 9.00am to 16.pm</p>
          </li>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.447010091177!2d81.66643211473341!3d21.13460178594111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28db1573b8526b%3A0x3f6847db83d1b08e!2sShri%20Shankaracharya%20Institute%20Of%20Professional%20Management%20And%20Technology%2C%20Raipur!5e0!3m2!1sen!2sin!4v1680963935230!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

function CForm() {
  return (
    <section id="c-form">
      <form action="">
        <span>LEAVE A MESSAGE</span>
        <h2>love to hear from you</h2>
        <input className="f-input" type="text" placeholder="Your Name" />
        <input className="f-input" type="text" placeholder="E-mail" />
        <input className="f-input" type="text" placeholder="Subject" />
        <textarea
          className="f-input"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message..."
        ></textarea>
        <button className="normal">Submit</button>
      </form>
      <div className="people">
        <div>
          <p>
            <span>Prabhat Chuabey</span>Fron-tend devloper||ui designer <br />
            Phone: +91 7000 90 1447 <br />
            Email: Prabhatchaubey803@gmail.com
          </p>
        </div>
        <div>
          <p>
            <span>Kunal Agrawal</span>Back-end devloper
            <br />
            Phone: +91 8959 55 8869 <br />
            Email: kunalagrwal@gmail.com
          </p>
        </div>
        <div>
          <p>
            <span>Himanshu jha</span>Frontend devloper
            <br />
            Phone: +91 9752 29 9212 <br />
            Email: Himanshujha@ssipmt.com
          </p>
        </div>
        <div>
          <p>
            <span>Vaibhav ghanekar</span>Frontend devloper
            <br />
            Phone: +91 9644 58 2521 <br />
            Email: Himanshujha@ssipmt.com
          </p>
        </div>
      </div>
    </section>
  );
}

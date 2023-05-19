import Navbar from "../components/navbar/Navbar";
import Helmet from "react-helmet";
import NewsLetter from "../components/newsletter/NewsLetter";
import Footer from "../components/footer/Footer";
import Feature from "../components/feature/Feature";
import PEXEL1 from "../assets/pexels-fauxels-3183150.jpg";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Agrosite - About</title>
      </Helmet>
      <Navbar />
      <AboutSection />
      <AboutUs />
      <Feature />
      <NewsLetter />
      <Footer />
    </>
  );
}

// Section 1
function AboutSection() {
  return (
    <section id="about-nav">
      <h2>#KnowUS</h2>
      <p className="text-gray-900">
        Save more with coupons &amp; low down payment
      </p>
    </section>
  );
}

// Section 2
function AboutUs() {
  return (
    <section id="about-head" className="section-p1">
      <img src={PEXEL1} alt="" />
      <div>
        <h2>Who We Are?</h2>
        <p>
          Our mission is to help farmers increase their productivity and
          efficiency by providing them with the latest and most advanced
          agricultural vehicles on the market. We're constantly updating our
          inventory with new and innovative products to meet the ever-evolving
          needs of our customers.
        </p>
        <br />
        <marquee
          style={{
            bgColor: "#ccc",
            loop: "-1",
            scrollAmount: "5",
            width: "100%",
          }}
          className="bg-gray-200"
        >
          Thank you for choosing Agrosite. We look forward to serving you and
          being a part of your success story.
        </marquee>
      </div>
    </section>
  );
}

// bgColor="#ccc" loop="-1" scrollamount="5" width="100%"

export default function NewsLetter() {
  return (
    <section id="newsletter">
      <div className="newstext">
        <h4>Sign Up For Newsletters</h4>
        <p>
          Get e-mail updates about our latest shop and
          <span>special offers.</span>
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your email address" id="" />
        <button className="normal">Sign Up</button>
      </div>
    </section>
  );
}

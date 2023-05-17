export default function NewsLetter() {
  return (
    <section id="newsletter">
      <div className="newstext">
        <h4>Sign Up For Newsletters</h4>
        <p className="bg-[#d36938] px-4">
          Get e-mail updates about our latest shop and &nbsp;
          <span className="">special offers.</span>
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your email address" id="" />
        <button className="md:px-4 rounded-r px-2 py-1">Sign Up</button>
      </div>
    </section>
  );
}

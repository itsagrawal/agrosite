export default function Feature() {
  return (
    <section id="feature">
      <div className="f-text">
        <h2 className="heading-title">
          <span>
            Farming for <strong>Today</strong>
            <br />
            and the <strong>Future</strong>
          </span>
        </h2>
      </div>
      <div className="c-con">
        <div className="card wallet">
          <div className="over"></div>
          <div className="circle">
            <img src="./assets/tractor.svg" />
          </div>

          <p>Modern Tractors</p>
        </div>
        <div className="card wallet">
          <div className="over"></div>
          <div className="circle">
            <img src="./assets/combine.svg" />
          </div>
          <p>modern harvester</p>
        </div>
        <div className="card wallet">
          <div className="over"></div>
          <div className="circle">
            <img className="z" src="./assets/rotavator.svg" />
          </div>
          <p>rotavator</p>
        </div>
        <div className="card wallet">
          <div className="over"></div>
          <div className="circle">
            <img src="./assets/seeder.svg" />
          </div>
          <p>Modern Seeder</p>
        </div>
        <div className="card wallet">
          <div className="over"></div>
          <div className="circle">
            <img src="./assets/sprayer.svg" />
          </div>
          <p>Self Sprayer</p>
        </div>
      </div>
    </section>
  );
}

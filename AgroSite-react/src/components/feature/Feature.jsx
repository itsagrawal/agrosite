import TractorSVG from "../../assets/tractor.svg";
import CombineSVG from "../../assets/combine.svg";
import RotavatorSVG from "../../assets/rotavator.svg";
import SeederSVG from "../../assets/seeder.svg";
import SprayerSVG from "../../assets/sprayer.svg";
import { v4 } from "uuid";

export default function CategoryFeature() {
  const Categories = [
    {
      name: "Modern Tractor",
      image: TractorSVG,
    },
    {
      name: "Modern Harvester",
      image: CombineSVG,
    },
    {
      name: "Rotavator",
      image: RotavatorSVG,
    },
    {
      name: "Modern Seeder",
      image: SeederSVG,
    },
    {
      name: "Self Sprayer",
      image: SprayerSVG,
    },
  ];
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
        {Categories.map((v, idx) => {
          return (
            <div className="card wallet" key={v4()}>
              <div className="over"></div>
              <div className="circle">
                <img src={v.image} />
              </div>
              <p>{v.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

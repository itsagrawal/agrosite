import { v4 } from "uuid";
export default function ProductCard({ v }) {
  return (
    <div
      key={v.id}
      className="border bg-white py-4 px-6 shadow max-w-sm rounded-md flex flex-col gap-y-2 pb-4"
      onClick={() => {}}
    >
      <img
        src={v.image}
        alt=""
        className=" w-60 aspect-square object-contain"
      />
      <div className="des flex flex-col gap-y-1">
        <span className="my-0 text-gray-500 flex-auto">{v.brandName}</span>
        <h5 className="text-xl font-bold tracking-wide line-clamp-2 h-14">
          {v.name}
        </h5>
        <div className="text-yellow-400 gap-x-1 flex">
          {[...Array(v.aggregateRating)].map(() => {
            return <i className="fas fa-star" key={v4()}></i>;
          })}
          {[...Array(5 - v.aggregateRating)].map(() => {
            return <i className="text-gray-500 fas fa-star" key={v4()}></i>;
          })}
        </div>
        <h4>
          <i className="fa fa-rupee"></i>{" "}
          <span className="font-semibold">{v.price}</span>
        </h4>
      </div>
    </div>
  );
}

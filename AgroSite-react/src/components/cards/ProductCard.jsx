export default function ProductCard({ v }) {
  return (
    <div
      key={v.id}
      className="border bg-white py-2 px-4 shadow max-w-sm rounded-md flex flex-col gap-y-2 pb-4"
      onClick={() => {}}
    >
      <img
        src={v.image}
        alt=""
        className=" w-60 aspect-square object-contain"
      />
      <div className="des flex flex-col gap-y-1">
        <span className="my-0 text-gray-500">{v.brandName}</span>
        <h5 className="text-xl font-bold tracking-wide line-clamp-2 h-16">
          {v.name}
        </h5>
        <div className="star text-yellow-400">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <h4>
          <i className="fa fa-rupee"></i>{" "}
          <span className="font-semibold">{v.price}</span>
        </h4>
      </div>
    </div>
  );
}

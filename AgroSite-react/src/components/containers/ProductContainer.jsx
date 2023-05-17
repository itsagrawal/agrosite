export default function ProductContainer({ children }) {
  return (
    <div className="grid md:grid-cols-4 gap-y-4 mt-10 gap-x-4 flex-wrap justify-center max-w-4xl md:mx-auto mx-4">
      {children}
    </div>
  );
}

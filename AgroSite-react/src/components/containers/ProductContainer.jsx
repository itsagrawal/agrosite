export default function ProductContainer({ children }) {
  return (
    <div className="grid md:grid-cols-4 gap-y-4 mt-32 gap-x-4 flex-wrap justify-center max-w-4xl mx-auto">
      {children}
    </div>
  );
}

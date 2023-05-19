export default function FullPageLoader() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-opacity-60 bg-white flex items-center justify-center z-50">
      <div
        className="border-4 border-t-4 border-dashed rounded-full w-12 h-12 animate-spin"
        style={{ borderColor: "#d36938" }}
      ></div>
    </div>
  );
}

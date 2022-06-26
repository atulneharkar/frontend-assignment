import "./Loader.scss";

function Loader() {
  return (
    <div className="fixed top-0 left-0 h-full w-full opacity-60 bg-black flex justify-center">
      <span className="text-white text-4xl font-semibold self-center">Loading...</span>
    </div>
  );
}

export default Loader;

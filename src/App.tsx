import logo from "./image/logo.png";
import beachWork from "./image/beach-work.png";

function App() {
  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full 2xl:col-span-2">
        <img className="h-24" src={logo} alt="Workcation" />
        <img
          className="mt-6 w-96 rounded-lg shadow-xl lg:hidden"
          src={beachWork}
          alt="A man's working on the beach"
        />
        <h1 className="mt-6 text-2xl font-bold">
          You can work from anywhere.
          <br className="hidden sm:inline lg:inline" />
          <span className="text-indigo-500">Take advantage of it.</span>
        </h1>
        <p className="mt-2 text-gray-600">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <div className="mt-5 space-x-2">
          <a
            className="btn btn-primary shadow-lg hover:bg-indigo-400 hover:-translate-y-0.5 transform transition"
            href="#"
          >
            Book your escape
          </a>
          <a className="btn btn-secondary" href="#">
            Learn more
          </a>
        </div>
      </div>
      <div className="hidden relative lg:block 2xl:col-span-3">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={beachWork}
          alt="A man's working on the beach"
        />
      </div>
    </div>
  );
}

export default App;

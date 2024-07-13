import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <div className="w-4/5 md:w-2/3 mx-auto">
        <Home />
        <About />
        <Projects />
        <div className="text-center md:py-10 mt-10 text-gray-500 text-xs">
          <p>Built and designed by Gael Zamora.</p>
          <p>All rights reserved. ©</p>
        </div>
      </div>
    </div>
  );
}

export default App;

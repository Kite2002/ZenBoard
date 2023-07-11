import Projects from "./pages/Projects";
import Nav from "./components/Nav";

function App() {

  return (
    <div className=" text-base bg-background min-h-screen">
      <Nav/>
      <Projects />
    </div>
  );
}

export default App;

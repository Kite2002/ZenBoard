import ProjectsList from "./pages/ProjectsList";
import Nav from "./components/Nav";
import Project from "./pages/Project";

function App() {

  return (
    <div className=" text-base bg-background h-screen overflow-hidden">
      <Nav/>
      <Project />
    </div>
  );
}

export default App;

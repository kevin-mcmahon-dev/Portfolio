import Header from "./Header.js"
import About from "./About.js"
import Technologies from "./Technologies.js"
import Projects from "./Projects.js"
import Contact from "./Contact.js"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <hr />
      <Technologies/>
      <hr />
      <Projects/>
      <hr />
      <Contact/>
    </div>
  );
}

export default App;

import React from "react";
import { NavBar } from "./layaout/NavBar";
import { Hero } from "./layaout/Hero";
import { About } from "./layaout/About";
import { Tool } from "./layaout/Tool";
import { Projects } from "./layaout/project";
import { Contacto } from "./layaout/Contacto";
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Tool />
      <Projects />
      <Contacto />  
    </div>
  );
}

export default App;

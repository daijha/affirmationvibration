import "./App.css";
import Title from "./components/Title";
import About from "./components/About";
import Affirmations from "./components/Affirmations";
import { useState } from "react";

function App() {
  return (
    <div className="page"> {/* divs can have more that 1 classname */}
      <Title/>
      <div className="pageInner">
         <About/>
      <Affirmations/>
      </div>
     
    </div>
  );
}

export default App;

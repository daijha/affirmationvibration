import "./App.css";
import Title from "./components/Title";
import About from "./components/About";
import Affirmations from "./components/Affirmations";
import { useState } from "react";

function App() {
    const [mood, setMood] = useState("");
  
  return (
    <div className={`page fade ${mood}-bg`}> {/* divs can have more that 1 classname */}
      <Title/>
      <div className="pageInner">
         <About mood={mood} setMood= {setMood}/>
      <Affirmations mood={mood} setMood= {setMood} />
      </div>
     
    </div>
  );
}

export default App;

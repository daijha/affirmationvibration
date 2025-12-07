import "./App.css";
import Title from "./components/Title";
import About from "./components/About";
import Affirmations from "./components/Affirmations";
import { useState } from "react";

function App() {
    const [mood, setMood] = useState("");
  return (
    <div className= {`page ${mood}-bg`}> {/* divs can have more that 1 classname */}
      <Title/>
      <About/>
      <Affirmations mood={mood} setMood={setMood} /> {/*state passed as props */}
    </div>
  );
}

export default App;

import "./App.css";
import Title from "./components/Title";
import About from "./components/About";
import Affirmations from "./components/Affirmations";

function App() {
  return (
    <div>
      <p>
        hello world! this is temporary. there needs to be a title component, a
        about component, and the affirmations component where most of the app
        will function. for the app find out how to make the page color change based off the mood selected {" "}
      </p>
      <Title/>
      <About/>
      <Affirmations/>
    </div>
  );
}

export default App;

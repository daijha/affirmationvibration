import "../App.css";
import audio from "../assets/affirmation vibration loop.MP3";
import { useState } from "react";
import { useRef } from "react";

function About({ mood, setMood }) {
  const [isPlaying, setIsPlaying] = useState(false); /*player should start off*/
  const audioRef = useRef(null);
  function togglePlay() {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
    } else {
      setIsPlaying(true);
      audioRef.current.play();
    }
  }
  return (
    <div className={`about `}>
      <h2>Inspired by David R. Hawkins</h2>
      <p>
        David R. Hawkins was an American psychologist widely recognized in
        spiritual communities. He authored the influential book Power vs. Force,
        along with a series of eight other works that explore consciousness and
        human potential. Hawkins created the Map of Consciousness, a profound
        guide for understanding how our inner state of being aligns with
        different vibrational levels of awareness. This page/application draws
        inspiration from his work, using affirmations to help users gradually
        elevate their vibration toward higher states of consciousness,
        ultimately approaching the lightness of Enlightenment. <br /> If this
        resonates with you, consider exploring Hawkins’ writings further to
        deepen your understanding.
      </p>
      <h2>Usage of Affirmations</h2>
      <p>
        Affirmations are a powerful tool for reshaping the mind, reprogramming
        emotional patterns, and influencing how we feel physically. To gain the
        most benefit, repeat them often, embody their meaning, and allow the
        words to transform your inner state. As your vibration rises, you may
        notice your body feeling lighter, more peaceful, and at ease.
      </p>
      <audio ref={audioRef} src={audio} loop />
      {/* adding the ref container to the audio tag. the src is the audio label i gave when importing mp3 */}
      <button className={`btn fade ${mood}-bg`} onClick={togglePlay}>
      <span className="txtwrapper">
          <span className={`letterfade ${isPlaying ? "hidden" : "visible"}`}>
          Play Ambient Music{" "}
        </span>{" "}
        {/*span is a inline container*/}
        <span className={`letterfade ${isPlaying ? "visible" : "hidden"}`}>
          Pause Ambient Music{" "}
        </span>
      </span>
      </button>
    </div>
  );
}

export default About;

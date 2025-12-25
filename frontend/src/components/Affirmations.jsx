import React, { useEffect } from "react";

/* useEffect is used to get the page to react after the state is updated */

import { useState } from "react";

/*updates the state of variables */

import "../App.css";

function Affirmations({ mood, setMood }) {
  // const [mood, setMood] = useState("");
  const [affs, setAffs] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // fetching the affs from the backend
    async function getAffs(mood) {
      try {
        const response = await fetch(
          `https://affirmationvibration.onrender.com/api/${mood}`
        );
        const data = await response.json();
        console.log(data);
        setIsVisible(false);

        setTimeout(() => {
          setAffs(data);
          setIsVisible(true);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
    if (mood) {
      console.log("mood selected:", mood);
      getAffs(mood);
    }
  }, [mood]);

  console.log("affs state:", affs);
  console.log("affirmations array:", affs.affirmations);

  return (
    <div className={`start fade ${mood}-bg`}>
      {/*have to use curly braces for the template literal */}
      <h2 className={isVisible ? "letterfade visible" : "letterfade hidden"}>
        {mood ? `Affirmations for ${mood}` : "How are you feeling?"}
      </h2>

      <select
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        // onChange={(e) => {
        //   setIsVisible(false);
        //   setTimeout(() => {
        //     setMood(e.target.value);
        //     setIsVisible(true);
        //   }, 1000);
        // updated the timeout after render }}
      >
        {/* when the dropdown is selected react gives a event object. inside that object is a property called target.value which gives the value selected. onchange sets the selection when it changes*/}
        <option value="">select your mood here</option>{" "}
        {/*option tag is for each item in dropdown. needs attribute value to specify data sent*/}
        <option value="shame">Shame</option>
        <option value="guilt">Guilt</option>
        <option value="apathy">Apathy</option>
        <option value="grief">Grief</option>
        <option value="fear">Fear</option>
        <option value="desire">Desire</option>
        <option value="anger">Anger</option>
        <option value="pride">Pride</option>
        <option value="courage">Courage</option>
        <option value="neutrality">Neutrality</option>
        <option value="willingness">Willingness</option>
        <option value="acceptance">Acceptance</option>
        <option value="reason">Reason</option>
        <option value="love">Love</option>
        <option value="joy">Joy</option>
        <option value="peace">Peace</option>
        <option value="enlightenment">Enlightenment</option>
      </select>
      {/*reminder: select is the tag 4 dropdown */}
      <div className="displaybox">
        {affs.affirmations ? (
          <ul className={isVisible ? "letterfade visible" : "letterfade hidden"} >
            {affs.affirmations ? (
              affs.affirmations.map((item) => <li key={item}>{item}</li>)
            ) : (
              <li className="placeholder">Affirmations will appear here...</li>
            )}
          </ul>
        ) : (
          <p className="move">
            Affirmations will appear here. <br /> <br />
            Select a mood from the dropdown menu to start resonating higher.
          </p>
        )}
      </div>
    </div>
  );
}
export default Affirmations;

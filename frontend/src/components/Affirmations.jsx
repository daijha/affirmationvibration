import React, { useEffect } from "react";

/* useEffect is used to get the page to react after the state is updated */

import { useState } from "react";

/*updates the state of variables */

import "../App.css";

function Affirmations() {
  const [mood, setMood] = useState("");
  const [affs, setAffs] = useState({});
  useEffect(() => {
    // fetching the affs from the backend
    async function getAffs(mood) {
      try {
        const response = await fetch(`http://localhost:3000/api/${mood}`);
        const data = await response.json();
        console.log(data);
        setAffs(data);
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
    <div>
     
      <h2>How are you feeling?</h2>
      <h3>Select your mood</h3>
      <select onChange={(e) => setMood(e.target.value)}>
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
          <ul>
            {affs.affirmations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Affirmations will appear here.</p>
        )}
      </div>
    </div>
  );
}
export default Affirmations;

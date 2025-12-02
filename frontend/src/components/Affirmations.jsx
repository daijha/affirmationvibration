

import "../App.css";

function Affirmations() {
  return (
    <div>
      <p>
        this is where the bulk of the app will be built. Remind yourself how to
        make boxes with css in this area. its easy. ( add className to the div)
      </p>
      <h2>How are you feeling?</h2>
      <h3>Select your mood</h3>
      <select>
        <option value="">select your mood here</option> {/*option tag is for each item in dropdown. needs attribute value to specify data sent*/}
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
      {/*reminder: this is the tag 4 dropdown */}
    </div>
  );
}
export default Affirmations;

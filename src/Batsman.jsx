import { useState } from "react";

const Batsman = () => {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
      const updatedRuns = runs + 6;
      const updatedSixes = sixes + 1;
      setSixes(updatedSixes);
      setRuns(updatedRuns);
  }

  return (
    <div>

      {
         runs > 50 && <p>You score: 50+</p>
      }
      <h3>Player: Bangla Batsman</h3>
      <p><small>Six: {sixes}</small></p>
      <h2>Score: {runs}</h2>
      <button onClick={handleSingle}>singles</button>
      <button>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
};

export default Batsman;
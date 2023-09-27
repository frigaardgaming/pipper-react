import { useState } from "react";
import PipBox from "./PipBox";
import { Pips } from "../entities/pips";
import AddButton from "./addButton";
import AddPip from "./AddPip";

export default function MainContent() {
  const [pips, setPips] = useState([]);


  return (
    <main>
      <div className="list">
        <div className="add-container">
          
          <AddPip pips={pips} setPips={setPips}/>
        </div>
        {pips.map((pip, index) => {
            return <PipBox key={index} pip={pip} />;
        })}
      </div>
    </main>
  );
}

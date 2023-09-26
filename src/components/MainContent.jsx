import { useState } from "react";
import PipBox from "./PipBox";
import { Pips } from "../entities/pips";

export default function MainContent() {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [pips, setPips] = useState([]);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAddPip = () => {
    const newPip = new Pips(username, content, new Date());
    setPips([...pips, newPip]);

    // Tømmer input felter
    setUsername("");
    setContent("");
  };

  return (
    <main>
      <div className="list">
        <div className="add-container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="text"
            placeholder="Content"
            value={content}
            onChange={handleContentChange}
          />

          <button className="add-button" onClick={handleAddPip}>
            Add pip
          </button>
        </div>
        {pips.map((pip, index) => {
            return <PipBox key={index} pip={pip} />;
        })}
      </div>
    </main>
  );
}

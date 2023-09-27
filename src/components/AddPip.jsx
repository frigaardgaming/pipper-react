import React, { useState } from 'react'
import AddButton from './addButton';
import { Pips } from '../entities/pips';

export default function AddPip({pips, setPips}) {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

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
    <div>
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
          <AddButton buttonText={"Add Pip"} onClick={handleAddPip}></AddButton>
    </div>
  )
}

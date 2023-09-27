import React, { useState } from 'react'
import AddButton from './addButton';
import { Pips } from '../entities/pips';
import ReactModal from 'react-modal';

export default function AddPip({pips, setPips}) {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

    handleCloseModal();
  };

  function handleOpenModal() {
    setIsOpen(true);
  };

  function handleCloseModal() {
    setIsOpen(false);
  };


  return (
    <div>
      <ReactModal isOpen={isOpen}>
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
        <AddButton buttonText={"Close"} onClick={handleCloseModal}></AddButton>
      </ReactModal>
      <AddButton buttonText={"Open Pips"} onClick={handleOpenModal}></AddButton>
    </div>
  )
}

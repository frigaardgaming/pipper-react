import React, { useState } from 'react'
import AddButton from './addButton';
import { Pips } from '../entities/pips';
import ReactModal from 'react-modal';

export default function AddPip({pips, setPips}) {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);

  const handleContentChange = (e) => {
    const string = e.target.value;
    setContent(string);
    setCharacterCount(string.length); // Opdaterer character counters state
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

  // Funktioner for at åbne og lukke modaler
  function handleOpenModal() {
    setIsOpen(true);
  };

  function handleCloseModal() {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  


  return (
    <div>
      <ReactModal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
        <div>
        <label>Username: </label>
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
        /></div>
        <label>Content: </label>
        <input
            type="text"
            placeholder="Content"
            value={content}
            onChange={handleContentChange}
            maxLength={255}
        />
        <div>
        <p>Character Count: {characterCount}/255</p>
        <AddButton buttonText={"Add Pip"} onClick={handleAddPip}></AddButton>
        <AddButton buttonText={"Close"} onClick={handleCloseModal}></AddButton>
        </div>
      </ReactModal>
      <AddButton buttonText={"Open Pips"} onClick={handleOpenModal}></AddButton>
    </div>
  )
}

import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function MusicPrompt() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const playMusic = () => {
    // Code to play music
    closeModal(); // Close the modal after user's choice
  }

  return (
    <div>
      <button onClick={openModal}>Play Music</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Music Prompt"
      >
        <h2>Do you want to play music?</h2>
        <button onClick={playMusic}>Yes</button>
        <button onClick={closeModal}>No</button>
      </Modal>
    </div>
  );
}

export default MusicPrompt;

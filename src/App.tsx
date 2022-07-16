import "./App.css";
import JoinModal from "./Components/JoinModal";
// import Button
import * as React from "react";
import { useState } from "react";

const App = () => {
  const [showJoinModal, setShowJoinModal] = useState(false);

  const displayJoinModal = function () {
    setShowJoinModal(true);
  };

  const closeJoinModal = function () {
    setShowJoinModal(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Queue Up</h1>
        <h3>A Simple, Music Queueing Application</h3>
        <h5>"Hey, let me queue up a song!"</h5>
        {showJoinModal && (
          <JoinModal open={showJoinModal} 
          // closeModal={closeJoinModal} />
        )}
        <button>Start Room</button>
        <button onClick={displayJoinModal}>Join Room</button>
        <p className="copyright">&copy; Copyright by Daniel Forero.</p>
      </header>
    </div>
  );
};

export default App;

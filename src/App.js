import "./App.css";
import { useState } from "react";

function App() {
  const [showJoinModal, setShowJoinModal] = useState(false);

  const displayJoinModal = function () {
    setShowJoinModal(!showJoinModal);
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Queue Up</h1>
          <h3>A Simple, Music Queueing Application</h3>
          <h5>"Hey, let me queue up a song!"</h5>
          {showJoinModal && <h1>Show Join Modal</h1>}
          <button>Start Room</button>
          <button onClick={displayJoinModal}>Join Room</button>
        </header>
      </div>
      <p class="copyright">&copy; Copyright by Daniel Forero.</p>
    </div>
  );
}

export default App;

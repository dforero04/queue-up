import * as React from "react";
// import { Link } from "react-router-dom";
// import Button
import JoinModal from "../Components/JoinModal";
import { useState } from "react";
import "../styles.css";
import { Button, Typography } from "@mui/material";

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
        <Typography variant="h1">Queue Up</Typography>
        <Typography variant="h4">
          A Simple, Music Queueing Application
        </Typography>
        <Typography variant="h6">"Hey, let me queue up a song!"</Typography>
        {showJoinModal && (
          <JoinModal open={showJoinModal} closeModal={closeJoinModal} />
        )}
        <Button
          data-testid="startBtn"
          variant="contained"
          sx={{
            color: "#274C77",
            backgroundColor: "#4680C3",
            marginY: 2,
          }}
        >
          Start Room
        </Button>
        <Button
          data-testid="joinBtn"
          variant="contained"
          onClick={displayJoinModal}
          sx={{
            color: "#274C77",
            backgroundColor: "#4680C3",
            marginY: 2,
          }}
        >
          Join Room
        </Button>
        <p className="copyright">&copy; Copyright by Daniel Forero.</p>
      </header>
    </div>
  );
};

export default App;

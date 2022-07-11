import React, { useState } from "react";
import "./Home.css";
import { TextField, MenuItem, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = ({ name, setName }) => {
  const [difficulty, setDifficulty] = useState("");

  return (
    <div className="content">
      <div className="settings">
        <h3>Quiz Setting</h3>

        <div className="settings__select">
          <TextField
            label="Enter Your Name"
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{ marginBottom: 25 }}
          />

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
            style={{ marginBottom: 30 }}
          >
            <MenuItem value="Easy">Easy</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Hard">Hard</MenuItem>
          </TextField>

          <Button variant="contained" size="large">
            <Link to="/quiz" className="start-quiz-link">
              Start Quiz
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

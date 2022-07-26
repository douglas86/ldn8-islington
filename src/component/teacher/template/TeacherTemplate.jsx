import Forms from "../organism/Forms";
import { useState } from "react";

import styles from "./styles.module.css";

const TeacherTemplate = ({ visibleLessons, setVisibleLessons }) => {
  const [value, setValue] = useState({});

  return (
    <div>
      <div className={styles.content} style={{ padding: "20px" }}>
        <button
          style={{
            background: "transparent",
            border: "transparent",
            color: "white",
          }}
          onClick={() => setVisibleLessons(true)}
        >
          Teacher Template
        </button>
        <button
          type="submit"
          style={{
            background: "transparent",
            border: "transparent",
            color: "white",
          }}
          onClick={() => setVisibleLessons(false)}
        >
          Cancel
        </button>
      </div>
      {visibleLessons && <Forms value={value} />}
    </div>
  );
};

export default TeacherTemplate;

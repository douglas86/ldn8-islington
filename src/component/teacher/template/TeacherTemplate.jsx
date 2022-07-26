import Forms from "../organism/Forms";

import styles from "./styles.module.css";

const TeacherTemplate = ({ visibleLessons, setVisibleLessons }) => {
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
      {visibleLessons && <Forms />}
    </div>
  );
};

export default TeacherTemplate;

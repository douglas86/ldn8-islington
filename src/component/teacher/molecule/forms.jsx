import Form from "react-bootstrap/Form";
import { toTitles } from "../atom/toTitles";
import { toName } from "../atom/toName";

import styles from "./styles.module.css";

export const forms = (items, handleChange) => {
  return (
    <Form.Control
      type="text"
      className={styles.form}
      value={items[1] === "" ? "" : items[1]}
      placeholder={toTitles(items)}
      onChange={(e) => handleChange(toName(items), e.target.value)}
    />
  );
};

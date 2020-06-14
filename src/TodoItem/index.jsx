import React from "react";

import styles from "./styles.module.scss";

const TodoItem = ({ children, text }) => {
  return <div className={styles.view}>{text}</div>;
};

export default TodoItem;

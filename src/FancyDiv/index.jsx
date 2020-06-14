import React from "react";

import styles from "./styles.module.scss";

const FancyDiv = ({ children }) => {
  return <div className={styles.view}>{children}</div>;
};

export default FancyDiv;

import React from "react";

import styles from "./styles.module.scss";
import View from "../View";

const Workspace = ({ children }) => {
  return (
    <View className={styles.workspace} fitContent={false}>
      {children}
    </View>
  );
};

export default Workspace;

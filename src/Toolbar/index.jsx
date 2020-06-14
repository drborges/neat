import React from "react";

import styles from "./styles.module.scss";
import View from "../View";

const Toolbar = ({ children }) => {
  return (
    <View className={styles.toolbar} fitContent>
      {children}
    </View>
  );
};

export default Toolbar;

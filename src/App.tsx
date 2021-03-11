import React from "react";

import styles from "./App.module.scss";
import Grid from "./components/Grid/Grid";

function App() {
  const grid = Array(20)
    .fill(null)
    .map((x) => Array(10).fill(null));

  return (
    <div className={styles.App}>
      <Grid gridState={grid} />
    </div>
  );
}

export default App;

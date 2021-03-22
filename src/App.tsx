import React, { useEffect } from "react";

import styles from "./App.module.scss";
import Grid from "./components/Grid/Grid";
import useTetrisGrid from "./hooks/useTetrisGrid";

function App() {
  const { grid, play } = useTetrisGrid();

  return (
    <div className={styles.App}>
      <Grid gridState={grid} />
    </div>
  );
}

export default App;

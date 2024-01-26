import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import React, { useState } from "react";

function App() {
  const [object, setObject] = useState('shirt');
  return (
    <main className="app transition-all ease-in">
      <Home setObject={setObject}/>
      <Canvas props={object} />
      <Customizer />
    </main>
  );
}

export default App;

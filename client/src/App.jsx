import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

import { useSnapshot } from "valtio";
import state from "./store";
function App() {
  const snap = useSnapshot(state);

  return (
    <main
      className="app transition-all ease-in"
      style={{ backgroundColor: `${snap.color}50` }}
    >
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;

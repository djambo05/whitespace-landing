import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "./Components/Main/Main";
import { Temp } from "./Components/Temp/Temp";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

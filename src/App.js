import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "./Components/Main/Main";
import { Temp } from "./Components/Temp/Temp";
import { Layout } from "./Components/Layout/Layout";
function App() {
  return (
    <HashRouter>
      <Layout />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "./Components/Pages/Main";
import { Project } from "./Components/Pages/Project";
import { Layout } from "./Components/Layout/Layout";
function App() {
  return (
    <>
      <Layout />
      <Main />
      <Project />
    </>
  );
}

export default App;

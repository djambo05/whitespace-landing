import { Main } from "./Components/Pages/Main";
import { Project } from "./Components/Pages/Project";
import { Layout } from "./Components/Layout/Layout";
import { UseExt } from "./Components/Pages/UseExt";
import { Choose } from "./Components/Pages/Choose/Choose";
function App() {
  return (
    <>
      <Layout />
      <Main />
      <Project />
      <UseExt />
      <Choose />
    </>
  );
}

export default App;

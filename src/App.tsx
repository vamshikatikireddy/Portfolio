import "./App.css";
import AppLayout from "./app-layout";
import { Flex } from "./components/functional";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Education, Experience, Projects } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <AppLayout className="container">
        <Flex
          direction="column"
          horizontal="center"
          vertical="center"
          className="contentWrapper"
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Flex>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;

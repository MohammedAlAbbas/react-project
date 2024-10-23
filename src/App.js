import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout.js';
import NotFound from './pages/NotFound.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import TaskManager from './pages/TaskManager.js';

function App() {
  return (
    <>
    <div>Welcome to my React App</div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="TaskManager" element={<TaskManager />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

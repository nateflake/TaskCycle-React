import About from "../../features/About";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import SingleTask from "../../features/SingleTask";
import Home from "../../features/Home";
import { useState } from "react";
import { show } from "../constants/constants";

function App() {
  const navigate = useNavigate();

  const [view, setView] = useState(show.tasks)
  const newView = (view: string) => { setView(view); }

  const newNav = (tabUrl: string) => { navigate(tabUrl) }

  return (
    <Container className='container'>
      <Routes>

        <Route path="/" element={<Navigate to="/Tasks/" replace />} />

        <Route path="/Tasks/" element={
          <Home view={view} setView={setView} newNav={newNav} />}
        />
        <Route path="/Tasks/late" element={
          <Home view={view} setView={setView} newNav={newNav} />}
        />
        <Route path="/Tasks/due" element={
          <Home view={view} setView={setView} newNav={newNav} />}
        />
        <Route path="/Tasks/soon" element={
          <Home view={view} setView={setView} newNav={newNav} />}
        />
        <Route path="/Tasks/later" element={
          <Home view={view} setView={setView} newNav={newNav} />}
        />
        <Route path="/Tasks/all" element={
          <Home view={view} setView={setView} newNav={newNav} />}
        />
        <Route path="/Tasks/drop" element={
          <Home view={view} setView={setView} newNav={newNav} />}
        />

        <Route path="/Tasks/:id" element={<SingleTask setView={setView} />} />

        <Route path="/about" element={<About setView={setView} />} />

      </Routes>
    </Container>
  );
}

export default App;
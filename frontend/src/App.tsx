import "./App.css";
import TestSignup from "./pages/TestSignup";
import TestLogin from "./pages/TestLogin";
import { TestApplication } from './pages/TestApplication'
import { TestPreview } from './pages/TestPreview'

import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<TestSignup />} />
      <Route path="/login" element={<TestLogin />} />
      <Route path="/application" element={<TestApplication />} />
      <Route path="/preview" element={<TestPreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
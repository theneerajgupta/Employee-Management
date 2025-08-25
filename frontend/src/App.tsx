import "./App.css";
import TestSignup from "./pages/TestSignup";
import TestLogin from "./pages/TestLogin";
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<TestSignup />} />
      <Route path="/login" element={<TestLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
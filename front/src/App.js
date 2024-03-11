import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './component/Nav';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        
      </Route>
    </Routes>
  );
}

export default App;

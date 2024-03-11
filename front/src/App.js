import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './component/Nav';
import Home from './component/Home';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="" element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;

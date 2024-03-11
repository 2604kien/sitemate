import { Routes, Route } from "react-router-dom";
import Navbar from './component/Nav';
import Home from './component/Home';
import AddIssue from "./component/AddIssue";
import EditIssue from "./component/EditIssue";
function App() {
  return (
    <div style={{height:"100vh"}}>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="" element={<Home/>}/>
        <Route path="add" element={<AddIssue/>}/>
        <Route path="edit/:id" element={<EditIssue/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;

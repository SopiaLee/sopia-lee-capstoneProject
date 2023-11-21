import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.scss';
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import AddEntries from "./pages/AddEntries/AddEntries";
import ViewEntries from "./pages/ViewEntries/ViewEntries";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <LeftNavbar/>
    <Routes>
      <Route path="/" element={<AddEntries/>}/>
      <Route path="/viewentries" element={<ViewEntries/>}/>
      <Route path="/viewentries :id" element={<ViewEntries/>}/>
      <Route path="/about" element={<></>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

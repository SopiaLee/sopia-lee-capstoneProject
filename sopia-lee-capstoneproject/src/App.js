import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<></>}/>
      <Route path="/viewentries" element={<></>}/>
      <Route path="/viewentries :id" element={<></>}/>
      <Route path="/about" element={<></>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

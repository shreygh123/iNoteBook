import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import NoteState from './Context/Notes/NoteState';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Alert from './Components/Alert';
import React,{useState} from 'react';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
  <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home  showAlert={showAlert}/>}> </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login showAlert={showAlert}/> }> </Route>
          <Route path="/register" element={<Register showAlert={showAlert} />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  </>
  );
}

export default App;

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from "react";
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(4 47 96)';
      showAlert("Dark mode has been enabled", "success");
      document.title = "textUtils - Dark Mode";

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "textUtils - Light Mode";
    }
  }

  return (
    <>

      <Navbar title="TextUtilS" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;


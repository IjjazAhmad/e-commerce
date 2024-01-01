import React from 'react';
import './App.scss';
import Routes from "./Pages/Routes"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <main>
        <Routes />
      </main>
      <ToastContainer />
    </>
  );
}

export default App;

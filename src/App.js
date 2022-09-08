import { Fragment } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
function App() {
  return (
    <Fragment>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="porfolio" element={<Portfolio/>} />
      </Routes>
    </Fragment>
  );
}

export default App;

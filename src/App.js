import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './component/Home';
import Getusers from './component/Getusers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getuser" element={<Getusers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

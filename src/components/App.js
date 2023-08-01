import { ToastContainer } from "react-toastify";
import DetailView from "../pages/DetailView";
import Navbar from "./Navbar";
import {Routes, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import WeekView from "../pages/WeekView";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<DetailView />} />
        <Route exact path="/week-view" element={<WeekView />} />
      </Routes>
    </div>
  );
}

export default App;

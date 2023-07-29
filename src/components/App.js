import { ToastContainer } from "react-toastify";
import DetailView from "../pages/DetailView";
import Navbar from "./Navbar";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <DetailView />
    </div>
  );
}

export default App;

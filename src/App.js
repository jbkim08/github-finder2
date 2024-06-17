import Navbar from "./components/layout/Navbar";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main>Centent</main>
      </div>
    </BrowserRouter>
  );
}

export default App;

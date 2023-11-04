import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.js";
import List from "./pages/list/List.js";
import Hotels from "./pages/hotels/Hotels.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hotels" element={<List />} />
          <Route path="/Hotels/:id" element={<Hotels />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

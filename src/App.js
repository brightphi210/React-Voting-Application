import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logins from "./Logins";
import MainApp from "./MainApp";

function App() {
  return (
  <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logins /> }/>
        <Route path="/dashboard" element={<MainApp /> }/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;

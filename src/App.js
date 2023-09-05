import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Test from "../component/Test";
import Vol from "../component/Vol";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/vol" element={<Vol />} />
      </Routes>
    </div>
  );
}

import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Outlet /> {/* ✅ This will render child routes dynamically */}
    </>
  );
}

export default App;
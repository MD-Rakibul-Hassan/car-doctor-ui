import { Outlet } from "react-router-dom"
import Navbar from "./Shared/Navigation/Navbar"
import Footer from "./Shared/Footer/Footer";

function App() {

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App

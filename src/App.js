import LogoName from "./components/navigation/LogoName";
import Navbar from "./components/navigation/Navbar";
import "./App.css";
import Router from "./components/Router";

function App() {
  return (
    <div className="container">
      <div className="navigation">
        <LogoName />
        <Navbar />
      </div>
      <Router />
    </div>
  );
}

export default App;

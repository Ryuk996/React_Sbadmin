import logo from "./logo.svg";
import "./App.css";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content">
        <div id="content-wrapper" class="d-flex flex-column">
          <Topbar></Topbar>
        </div>
        <Dashboard></Dashboard>
      </div>
    </div>
  );
}

export default App;

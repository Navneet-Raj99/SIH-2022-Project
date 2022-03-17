import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DirectorLogin from "./Container/DirectorLogin/DirectorLogin";
import Homepage from "./Container/HomePage/Homepage";
import AfterMemberLogin from "./Container/AfterMemberLogin/AfterMemberLogin";
import Department1Login from './Container/Department1Login/Department1Login'
import Department2Login from './Container/Department2Login/Department2Login'
import Department3Login from './Container/Department3Login/Department3Login'
import Department4Login from './Container/Department4Login/Department4Login'
import CitizenLogin from "./Container/CitizenLogin/CitizenLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/directorsignin" exact element={<DirectorLogin />} />
        <Route path="/membersignin" exact element={<AfterMemberLogin />} />
        <Route path="/department1signin" exact element={<Department1Login />} />
        <Route path="/department2signin" exact element={<Department2Login />} />
        <Route path="/department3signin" exact element={<Department3Login />} />
        <Route path="/department4signin" exact element={<Department4Login />} />
        <Route path="/citizensignin" exact element={<CitizenLogin/>} />
      </Routes>
    </Router>
  );
}

export default App;

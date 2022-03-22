import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DirectorLogin from "./Container/DirectorLogin/DirectorLogin";
import Homepage from "./Container/HomePage/Homepage";
import AfterMemberLogin from "./Container/AfterMemberLogin/AfterMemberLogin";
import Department1Login from './Container/Department1Login/Department1Login'
// import Department2Login from './Container/Department2Login/Department2Login'
// import Department3Login from './Container/Department3Login/Department3Login'
// import Department4Login from './Container/Department4Login/Department4Login'
import CitizenAfterLogin from './Container/AfterLoginPanel/CitizenAfterLogin/CitizenAfterLogin'
import CitizenLogin from "./Container/CitizenLogin/CitizenLogin";

import MemberStates from "./Context/MemberContext/MemberStates";
// import DirectorPanel from "./Container/AfterLoginPanel/DirectorPanel/DirectorPanel";
import MemberAfterLogin from "./Container/AfterLoginPanel/MemberAfterLogin/MemberAfterLogin";
import DirectorPanel2 from "./Container/AfterLoginPanel/DirectorPanel/DirectorPanel2";

function App() {
  return (
    <MemberStates>
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/directorsignin" exact element={<DirectorLogin />} />
        <Route path="/membersignin" exact element={<AfterMemberLogin />} />
        <Route path="/department1signin" exact element={<Department1Login />} />
        <Route path="/directorpanel" exact element={<DirectorPanel2/>} />
        <Route path="/memberpanel" exact element={<MemberAfterLogin/>} />
        {/* <Route path="/department2signin" exact element={<Department2Login />} /> */}
        {/* <Route path="/department3signin" exact element={<Department3Login />} /> */}
        {/* <Route path="/department4signin" exact element={<Department4Login />} /> */}
        <Route path="/citizensignin" exact element={<CitizenLogin/>} />
        <Route path="/citizenafterlogin" exact element={<CitizenAfterLogin/>} />
      </Routes>
    </Router>
    </MemberStates>
  );
}

export default App;

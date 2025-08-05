import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import DashBoard from "./pages/Dashboard.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import MeetingRoom from "./pages/MeetingRoom.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Setmeetingfeedback from "./pages/Setmeetingfeedback.jsx";
import Aboutpage from "./pages/Aboutpage.jsx";
import MeetingHistory from "./pages/MeetingHistory.jsx";




const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/room/:roomId"
          element={
            <RequireAuth>
              <MeetingRoom />
            </RequireAuth>
          }
        />
        <Route  path="/meetingfeedback/:meetingid"
          element={
            <RequireAuth>
              <Setmeetingfeedback/>
            </RequireAuth>
          }       />

<Route  path="/meetingreport/:userid"
          element={
            <RequireAuth>
              <MeetingHistory/>
            </RequireAuth>
          }       />


        <Route
          path="/profile"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route path="/About"   element={<Aboutpage/>}      />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;

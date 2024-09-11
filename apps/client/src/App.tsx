import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Layout from "./Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ContestPage from "./pages/ContestPage";
import FreelancerPage from "./pages/FreelancerPage";
import CommunityPage from "./pages/CommunityPage";
import AddEventPage from "./pages/AddContest";
import ContestSubmissionsPage from "./pages/IndiContest";
import FreelancerDashboard from "./pages/DashBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route index element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contest" element={<ContestPage />} />
          <Route path="/findlancer" element={<FreelancerPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/addcontest" element={<AddEventPage />}></Route>
          <Route path="/contest/:id" element={<ContestSubmissionsPage />} />
          <Route path="/dashboard" element={<FreelancerDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

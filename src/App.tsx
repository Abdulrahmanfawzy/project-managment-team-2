import AllProjectsPage from "./app/routes/AllProjectsPage";

// Main Components
import AuthPageNav from "./components/AuthPagesNav";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import ProfilePage from "./components/profilePage";

export default function App() {
  return (
    <>
      <ProfilePage />
      <AllProjectsPage />
      {/* <ResetPassword/> */}
    </>
  );
}
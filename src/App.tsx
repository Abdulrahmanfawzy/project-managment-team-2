import Router from "./app/index";

// Main Components
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import ProfilePage from "./components/profilePage";

export default function App() {
  // const { t } = useTranslation();
  return (
    <>
      <Router/>
    </>
  );
}
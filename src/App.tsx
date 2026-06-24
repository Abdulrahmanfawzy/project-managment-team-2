import { useTranslation } from "react-i18next";
import LangSwitcher from "./components/shared/lang-switcher";

// Main Components
import AuthPageNav from "./components/AuthPagesNav";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import ProfilePage from "./components/profilePage";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <ProfilePage />
      {/* <ResetPassword/> */}
    </>
  );
}
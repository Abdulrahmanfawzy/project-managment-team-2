import { useTranslation } from "react-i18next";
import LangSwitcher from "./components/shared/lang-switcher";

// Main Components
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import { ChartContainer } from "./components/ui/chart";
import Router from "./app/index";
import Nav from "./components/AuthPagesNav";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <Router/>
    </>
  );
}
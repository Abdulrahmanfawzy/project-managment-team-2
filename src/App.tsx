import { useTranslation } from "react-i18next";
import LangSwitcher from "./components/shared/lang-switcher";

// Main Components
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import { ChartContainer } from "./components/ui/chart";
import TasksPage from "./app/routes/TasksPage";
import Router from "./app/index";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <Router/>
    </>
  );
}
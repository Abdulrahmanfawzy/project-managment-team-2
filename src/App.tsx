import { useTranslation } from "react-i18next";
import LangSwitcher from "./components/shared/lang-switcher";

// Main Components
import Login from "./components/Login";
import Nav from "./components/Nav";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <Nav/>
      <Login />
    </>
  );
}
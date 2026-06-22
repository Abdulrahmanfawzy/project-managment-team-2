import { useTranslation } from "react-i18next";
import LangSwitcher from "./components/shared/lang-switcher";

// Main Components
import Login from "./components/Login";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <Login />
    </>
  );
}
// import Router from "./app/index";
import Nav from "./components/shared/AuthPagesNav";
import Login from "./features/Authentication/components/Login";
import Signup from "./features/Authentication/components/Signup";
import ResetPassword from "./features/Authentication/components/Signup";
import ProfilePage from "./features/profilePage/components/profilePage";
import Calendar from "./features/AddMettingPage/components/calendar";
import { CalendarProvider } from "./features/AddMettingPage/components/calendar/calendar-provider";
import Projectbref from "./features/profilePage/components/Projectbref";
import AlertModal from "./components/shared/AlertModal";
import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner"; // اتأكد إن المسار صح
// const { t } = useTranslation();
export default function App() {
  // const { t } = useTranslation();
  return (
    <>
      <Outlet/>
      <Toaster richColors position="top-right" />
    </>
  );
}

// Flatten

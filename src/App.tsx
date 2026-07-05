import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Router} from "./app/index";
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
import Navbar from "./components/layout/Navbar";
import { Toaster } from "@/components/ui/sonner"; // اتأكد إن المسار صح
// const { t } = useTranslation();

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Outlet/>
      <Toaster richColors position="top-right" />
    </>
  );
}

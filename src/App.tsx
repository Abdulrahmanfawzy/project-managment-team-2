import Router from "./app/index";
import Login from "./components/Login";
import Nav from "./components/AuthPagesNav";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import ProfilePage from "./components/profilePage";
import Calendar from "./calendar/calendar";
import Layout from "./components/layout/dashboardLayout"
import { CalendarProvider } from "./calendar/calendar-context";
import AlertModal from "./components/shared/AlertModal";
import { Toaster } from "@/components/ui/sonner"; // اتأكد إن المسار صح
// const { t } = useTranslation();
export default function App() {
  // const { t } = useTranslation();
  const queryClient = new QueryClient()
  return (
    <>
      <Login/>
      {/* <Signup /> */}
      {/* <ResetPassword/> */}
      {/* <ProfilePage/> */}
      {/* <Router/> */}
      {/* <CalendarProvider>
        <Calendar />
       </CalendarProvider> */}
      <Toaster richColors position="top-right" />
    </>
  );
}


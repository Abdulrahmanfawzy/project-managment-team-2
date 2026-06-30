import Router from "./app/index";
import Login from "./components/Login";
import ProfilePage from "./components/profilePage";
import Calendar from "./calendar/calendar";
import Layout from "./components/layout/dashboardLayout"
import { CalendarProvider } from "./calendar/calendar-context";
// const { t } = useTranslation();

export default function App() {
  // const { t } = useTranslation();
  return (
    <>
      {/* <Login/> */}
      {/* <ProfilePage/> */}
      {/* <Router/> */}
      <ProfilePage/>
      {/* <Layout/> */}
      {/* <CalendarProvider>
        <Calendar />
      </CalendarProvider> */}
    </>
  );
}

// Flatten

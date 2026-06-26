import Router from "./app/index";
import Login from "./components/Login";
import ProfilePage from "./components/profilePage";
import Calendar from "./calendar/calendar";
import { CalendarProvider } from "./calendar/calendar-context";
// const { t } = useTranslation();

export default function App() {
  return (
    <>
      {/* <Login/> */}
      {/* <ProfilePage/> */}
      {/* <Router/> */}
      <CalendarProvider>
        <Calendar />
      </CalendarProvider>
    </>
  );
}

// Flatten

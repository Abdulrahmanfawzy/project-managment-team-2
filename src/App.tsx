import Router from "./app/index";
import Login from "./components/Login";
import ProfilePage from "./components/profilePage";
import Calendar from "./calendar/calendar";
import Layout from "./components/layout/dashboardLayout"
import { CalendarProvider } from "./calendar/calendar-context";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// const { t } = useTranslation();

export default function App() {
  // const { t } = useTranslation();
  const queryClient = new QueryClient()
  return (
    <>
      {/* <Login/> */}
      {/* <ProfilePage/> */}
      <QueryClientProvider client={queryClient}>
        <Router/>
      </QueryClientProvider>
      {/* <ProfilePage/> */}
      {/* <Layout/> */}
      {/* <CalendarProvider>
        <Calendar />
      </CalendarProvider> */}
    </>
  );
}


import Login from "@/features/Authentication/components/Login";
import Signup from "@/features/Authentication/components/Signup";
import ForgetPass from "@/features/Authentication/components/ForgetPass";
import ProfilePage from "@/features/profilePage/components/profilePage";
import ProfilePageTasks from "@/features/profilePage/components/ProfilePageTasks";
import ProfilePageAbout from "@/features/profilePage/components/ProfilePageAbout";
import ProfilePageFiles from "@/features/profilePage/components/ProfilePageFiles";
import AddMeetingCalendarPage from "@/features/AddMettingPage/components/calendar"
import ResetPassword from "@/features/Authentication/components/ResetPass"

export const LoginPage=()=><Login/>
export const SignupPage=()=><Signup/>
export const ResetPasswordPage=()=><ResetPassword/>
export const ForgetPassPage=()=><ForgetPass/>
export const ProfilePageData = () => <ProfilePage />
export const ProfileTasksPage=()=><ProfilePageTasks/>
export const ProfileFilesPage=()=><ProfilePageFiles/>
export const ProfileAboutPage=()=><ProfilePageAbout/>
export const Calendar = ()=> <AddMeetingCalendarPage/>

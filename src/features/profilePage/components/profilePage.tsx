import AuthPagesNav from "../../../components/shared/AuthPagesNav"
import AnalysisCard from "./AnalysisCard";
import UserProfileData from "./UserProfileData";
import ProfilePageAbout from "./ProfilePageAbout";
// React Hooks
import {useState} from "react";
// Icons
import { BriefcaseBusiness } from "lucide-react";
import { Clock } from "lucide-react";
import {RouterProvider} from "react-router-dom"
import { Link } from "react-router-dom";
import {useNavigate, Outlet } from "react-router-dom";
const linksContents=[
  "overview",
  "tasks",
  "files",
]




const ProfilePage=()=>{
  const [activeLinkIndex,setActiveLinkIndex] = useState(0)

const navigate=useNavigate();


function handleProfileMainLinks() {
  /*====== Here We Want to Put Link Tag From React Router Dom ====== */
  return linksContents.map((linkContent, index) => {
    return (
      <Link to={`${linkContent.toLowerCase()}`}
        key={index}
        className={`relative inline-block cursor-pointer  py-2 capitalize text-lg font-semibold before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-brand hover:text-brand transition-all duration-200 ${index === activeLinkIndex ? "before:visible text-brand" : " before:invisible text-mainText"}`}
        onClick={() => {
          handleActiveLinks(index);
        }}
      >
        <li>{linkContent}</li>
      </Link>
    );
  });
}

function handleActiveLinks(index) {
  setActiveLinkIndex(index);
}

    return (
      <>
        <AuthPagesNav />
        <section className="py-7">
          <section className="mainContainer flex flex-col items-center lg:flex-row  gap-9">
            <UserProfileData
              userName="ahmed fouad"
              userJob="front-end developer"
              joinDate="Joind Apr 2022"
              innerIconUrl="/profileUpdate"
            />
            {/*Client Tasks Analysis */}
            <section className="flex flex-col items-center xl:flex-row gap-5 w-full flex-1">
              <AnalysisCard
                title="completed tasks"
                innerNumber={140}
                Icon={BriefcaseBusiness}
                colorClassEffect={"primaryIconEffect"}
              />

              <AnalysisCard
                title="hours worked"
                innerNumber={345}
                Icon={Clock}
                colorClassEffect={"dangerIconEffect"}
              />
            </section>
            {/*=== Client Tasks Analysis ===*/}
          </section>
          {/* Switch Pages Links */}
          <section className="mainContainer my-5">
            <ul id="profileLinks" className="flex items-center gap-7 flex-wrap">
              {handleProfileMainLinks()}
            </ul>
          </section>
          {/*=== Switch Pages Links ===*/}

          <section className="mainContainer">
            <Outlet />
          </section>
        </section>
      </>
    );
}

export default ProfilePage;
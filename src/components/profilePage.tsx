import AuthPagesNav from "./AuthPagesNav"
import AnalysisCard from "./AnalysisCard";
import ProfilePageAbout from "./ProfilePageAbout";
// React Hooks
import {useState} from "react";
// Icons
import { CalendarDays } from "lucide-react";
import { Settings } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Clock } from "lucide-react";


const linksContents=[
  "overview",
  "tasks",
  "files",
]




const ProfilePage=()=>{
  const [activeLinkIndex,setActiveLinkIndex] = useState(0)



function handleProfileMainLinks() {
  /*====== Here We Want to Put Link Tag From React Router Dom ====== */
  return linksContents.map((linkContent, index) => {
    return (
      <a
        key={index}
        className={`relative inline-block cursor-pointer  py-2 capitalize text-lg font-semibold before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-brand hover:text-brand transition-all duration-200 ${index === activeLinkIndex ? "before:visible text-brand" : " before:invisible text-mainText"}`}
        onClick={() => {
          handleActiveLinks(index);
        }}
      >
        <li>{linkContent}</li>
      </a>
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
            {/* Client Profile personal Info */}
            <section className="flex-1">
              {/* Profile name And Image */}
              <section className="flex flex-col lg:flex-row  items-center gap-4">
                {/* Profile Image */}
                <section className="size-25 lg:size-30 rounded-full  relative">
                  <section className="size-full overflow-hidden rounded-full">
                    <img
                      src="https://placehold.co/500"
                      alt="profileImage"
                      className=" size-full  rounded-full"
                    />
                  </section>
                  <Settings
                    className="absolute right-0 bottom-0 bg-white rounded-full p-1 cursor-pointer"
                    size={41}
                  />
                </section>
                {/*=== Profile Image ===*/}

                {/* Person Profile Name */}
                <section className="text-center lg:text-left">
                  <h1 className="text-3xl font-bold capitalize text-mainText mb-3">
                    Person Name
                  </h1>
                  <p className="flex gap-3 text-mutedText font-semibold">
                    <span className="">Person Job</span>
                    <span className="flex gap-1.5">
                      <CalendarDays />
                      Joined Date Here
                    </span>
                  </p>
                </section>
                {/*=== Person Profile Name ===*/}
              </section>
              {/*=== Profile name And Image ===*/}
            </section>
            {/*=== Client Profile personal Info ===*/}

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
            <ProfilePageAbout />
          </section>
        </section>
      </>
    );
}

export default ProfilePage;
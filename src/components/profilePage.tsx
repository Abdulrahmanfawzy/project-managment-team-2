import AuthPagesNav from "./AuthPagesNav"
import AnalysisCard from "./AnalysisCard";
import ProfilePageAbout from "./ProfilePageAbout";

// Icons
import { CalendarDays } from "lucide-react";
import { Settings } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Clock } from "lucide-react";


const ProfilePage=()=>{
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
          <section className="mainContainer mb-3"></section>
          {/*=== Switch Pages Links ===*/}

          <section className="mainContainer">
            <ProfilePageAbout/>
          </section>
        </section>
      </>
    );
}

export default ProfilePage;
import { Settings } from "lucide-react";
import {Link} from "react-router-dom";
import { CalendarDays } from "lucide-react";

const UserProfileData = ({userName,userJob,joinDate,innerIconUrl}) => {

  return (
    <>
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
            <Link to={innerIconUrl} className="absolute right-0 bottom-0 bg-white rounded-full p-1 cursor-pointer">
                <Settings size={29}/>
            </Link>
          </section>
          {/*=== Profile Image ===*/}

          {/* Person Profile Name */}
          <section className="text-center lg:text-left">
            <h1 className="text-3xl font-bold capitalize text-mainText mb-3">
              {userName ? userName: ""}
            </h1>
            {userJob && joinDate && (
              <p className="flex gap-3 text-mutedText font-semibold">
                <span className="">{userJob}</span>
                <span className="flex gap-1.5">
                  <CalendarDays />
                  {joinDate}
                </span>
              </p>
            )}
          </section>
          {/*=== Person Profile Name ===*/}
        </section>
        {/*=== Profile name And Image ===*/}
      </section>
      {/*=== Client Profile personal Info ===*/}
    </>
  );
};

export default UserProfileData;

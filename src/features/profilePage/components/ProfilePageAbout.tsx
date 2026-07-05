import { File } from "lucide-react";

const ProfilePageAbout=()=>{
    return (
      <section className="lg:w-[60%]">
        <h3 className="text-center lg:text-left capitalize text-2xl font-bold mb-2">about</h3>
        <p className="text-center lg:text-left text-mutedText text-md leading-7 mb-5 font-medium">
          Here The Experience Of This Person Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Repudiandae enim quibusdam autem fugit,
          amet blanditiis consectetur aliquid assumenda nihil. Expedita
          architecto magnam sed error aliquid molestias officiis aperiam soluta
          blanditiis.
        </p>

        <h3 className="text-center lg:text-left capitalize text-2xl font-bold mb-4">
          recent activities
        </h3>
        <ul className="space-y-5 list-inside">
          {/* List Item */}
          <li className="relative flex items-center justify-between flex-wrap gap-3 text-mutedText text-md font-medium ps-11">
            {/* Task Name */}
            <p className="capitalize font-semibold ">
              completed task user research analysis
            </p>
            {/*=== Task Name ===*/}

            {/* Task Ended Time */}
            <span className="font-medium text-medium">1h ago</span>
            {/*=== Task Ended Time ===*/}

            {/* File Icon */}
            <File className="absolute top-[50%] -translate-y-[50%] left-2.5 text-[gold]" />
            {/*=== File Icon ===*/}
          </li>
          {/*=== List Item ===*/}
          
          {/* List Item */}
          <li className="relative flex items-center justify-between flex-wrap gap-3 text-mutedText text-md font-medium ps-11">
            {/* Task Name */}
            <p className="capitalize font-semibold ">
              completed task user research analysis
            </p>
            {/*=== Task Name ===*/}

            {/* Task Ended Time */}
            <span className="font-medium text-medium">1h ago</span>
            {/*=== Task Ended Time ===*/}

            {/* File Icon */}
            <File className="absolute top-[50%] -translate-y-[50%] left-2.5 text-[gold]" />
            {/*=== File Icon ===*/}
          </li>
          {/*=== List Item ===*/}
          {/* List Item */}
          <li className="relative flex items-center justify-between flex-wrap gap-3 text-mutedText text-md font-medium ps-11">
            {/* Task Name */}
            <p className="capitalize font-semibold ">
              completed task user research analysis
            </p>
            {/*=== Task Name ===*/}

            {/* Task Ended Time */}
            <span className="font-medium text-medium">1h ago</span>
            {/*=== Task Ended Time ===*/}

            {/* File Icon */}
            <File className="absolute top-[50%] -translate-y-[50%] left-2.5 text-[gold]" />
            {/*=== File Icon ===*/}
          </li>
          {/*=== List Item ===*/}

        </ul>
      </section>
    );
}
export default ProfilePageAbout;
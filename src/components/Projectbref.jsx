import { ChevronRight } from "lucide-react";
import { Progress } from "./ui/progress";

export default function Projectbref({ project, selectedPage, setSelectedPage }) {
  
  let activeButtonNavbar = "text-blue-600 font-medium p-2 border-b-2"
  
  return (
    <>
      <div className="mt-5">
        <header className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-1">
              <p className="text-sm">Projects</p>
              <ChevronRight size={18} strokeWidth={3} />
              <p className="text-black text-sm">{project.projectName}</p>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-black font-bold text-lg">
                {project.projectName}
              </h1>
              <p className="bg-green-200 rounded-2xl px-3 text-green-700">
                42% Completed
              </p>
            </div>
          </div>
          <div className="bg-white px-4 py-2 flex flex-col gap-2 rounded-xl">
            <p className="text-black">DuE Date</p>
            <Progress value={65} className="" />
            <div className="flex flex-row gap-3">
              <p>Tart Date: {project.startDate}</p>
              <p>Deadline: {project.deadline}</p>
            </div>
          </div>
        </header>
        <nav className="flex gap-5 mt-5">
          <button
            className={`cursor-pointer ${selectedPage === "overview" && activeButtonNavbar}`}
            onClick={() => {
              setSelectedPage("overview");
            }}
          >
            Overview
          </button>
          <button
            className={`cursor-pointer ${selectedPage === "tasks" && activeButtonNavbar}`}
            onClick={() => {
              setSelectedPage("tasks");
            }}
          >
            Tasks
          </button>
          <button
            className={`cursor-pointer ${selectedPage === "teams" && activeButtonNavbar}`}
            onClick={() => {
              setSelectedPage("teams");
            }}
          >
            Teams
          </button>
          <button
            className={`cursor-pointer ${selectedPage === "files" && activeButtonNavbar}`}
            onClick={() => {
              setSelectedPage("files");
            }}
          >
            Files
          </button>
        </nav>
      </div>
    </>
  );
}

import {
  Search,
  BriefcaseBusiness,
  File,
  Users,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import NewProjectModal from "../../components/NewProjectModal";
import Projectbref from "../../components/Projectbref";
import Overview from "./Overview";

export default function AllProjectsPage() {
  // Use States
  let [isOpen, setIsOpen] = useState(false);
  let [is2Open, setIs2Open] = useState(false);
  // Selected Projects For Select
  let [selectedProjectSelect, setSelectedProjectSelect] =
    useState("All Projects");
  let [sortBy, setSortBy] = useState("newest");
  let [searchQuery, setSearchQuery] = useState("");
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [selectedPage, setSelectedPage] = useState("all projects");
  let [selectedProject, setSelectedProject] = useState("");
  let [projectsData, setProjects] = useState([
    {
      id: 1,
      projectName: "Alpha Platform",
      startDate: "2026-03-01",
      deadline: "2026-06-15",
      status: "Active",
      filesCount: 22,
      team: ["Ahmed", "Sara", "Ali"],
      priority: "High",
    },
    {
      id: 2,
      projectName: "SepetGo E-Commerce",
      startDate: "2026-01-10",
      deadline: "2026-04-20",
      status: "Done",
      filesCount: 15,
      team: ["Omar", "Mona"],
      priority: "Medium",
    },
  ]);

  // FIlter Projects By Search

  let searchProjects = projectsData.filter((project) => {
    return project.projectName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });

  // Filter Projects By name

  let filteredProjects = searchProjects.filter((project) => {
    if (selectedProjectSelect === "All Projects") return true;
    return selectedProjectSelect === project.projectName;
  });

  // Filter Projects by Date
  let sortedAndFilteredProjects = filteredProjects.slice().sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.startDate) - new Date(a.startDate); // الأحدث أولاً
    } else {
      return new Date(a.startDate) - new Date(b.startDate); // الأقدم أولاً
    }
  });

  const statusColors = {
    Done: "text-green-600 ",
    Active: "text-blue-600",
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen pt-10">
        <div className="flex flex-col w-11/12 m-auto">
          {/* بداية الشرط بتاعك */}
          {selectedPage === "all projects" && (
            <>
              <div className="flex justify-between items-center">
                <h1 className="text-black text-xl font-medium">All Projects</h1>
                <button
                  className="text-white bg-blue-600 rounded-xl text-sm px-3 py-1 cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  Add Project +
                </button>
                {/* Add Project Modal */}
                {isModalOpen && (
                  <NewProjectModal
                    setIsModalOpen={setIsModalOpen}
                    setProjects={setProjects}
                  />
                )}
              </div>
              <div className="flex justify-between mt-5 items-center">
                {/* Search */}
                <div className="relative text-black">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2  w-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white h-7 w-full pl-10 pr-4 py-2 border border-gray-300 text-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-black"
                  />
                </div>
                {/* Select */}
                <div className="flex gap-2 relative">
                  <div
                    className="flex items-center gap-1 text-black border border-black rounded-xl px-3 py-2 cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    {selectedProjectSelect}
                    <ChevronDown size={20} strokeWidth={2} />
                  </div>
                  {/* Second Select */}
                  <div
                    className="flex items-center gap-1 text-black border border-black rounded-xl px-3 py-2 cursor-pointer"
                    onClick={() => {
                      setIs2Open((prev) => !prev);
                    }}
                  >
                    {sortBy}
                    <ChevronDown size={20} strokeWidth={2} />
                  </div>
                  {/* Dropdown */}
                  {isOpen && (
                    <Dropdown
                      projectsData={projectsData}
                      setSelectedProjectSelect={setSelectedProjectSelect}
                      setIsOpen={setIsOpen}
                    />
                  )}
                  {/* Second Dropdown */}
                  {is2Open && (
                    <Dropdown
                      projectsData={[
                        { projectName: "newest" },
                        { projectName: "oldest" },
                      ]}
                      setSelectedProjectSelect={setSortBy}
                      setIsOpen={setIs2Open}
                    />
                  )}
                </div>
              </div>
              {/* Tabel */}
              <table className="mt-5 text-left py-5 text-sm">
                <thead>
                  <tr className="text-black font-extralight border-b-2">
                    <th className="py-3">Project Name</th>
                    <th>Start Date</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Files</th>
                    <th>Teams</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedAndFilteredProjects.map((project) => (
                    <tr
                      key={project.id}
                      onClick={() => {
                        setSelectedPage("overview");
                        setSelectedProject(project);
                      }}
                      className="bg-white border-t-10 border-gray-100 cursor-pointer hover:bg-gray-200"
                    >
                      <td className="p-3 flex gap-1 items-center text-black">
                        <BriefcaseBusiness />
                        {project.projectName}
                      </td>
                      <td>{project.startDate}</td>
                      <td>{project.deadline}</td>
                      <td className={`${statusColors[project.status]}`}>
                        {project.status}
                      </td>
                      <td>
                        <div className="flex items-center">
                          <File className="text-yellow-300 text-xs" />
                          {project.filesCount} Files
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <Users size={20} strokeWidth={2} />
                          {project.team.join(", ")}
                        </div>
                      </td>
                      <td>{project.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          {/* قفلنا القوس هنا بعد الجدول بالظبط عشان يختفي مع باقي العناصر اللّي فوق */}

          {/* Open pages */}
          {selectedPage !== "all projects" && (
            <>
              <Projectbref
                project={selectedProject}
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
              {selectedPage === "overview" && <Overview />}
            </>
          )}
        </div>
      </div>
    </>
  );
}

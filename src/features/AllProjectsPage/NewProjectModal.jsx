import { useState, useRef } from "react";
import axios from "axios";
import { X, BriefcaseBusiness, UploadCloud } from "lucide-react";

export default function NewProjectModal({ setIsModalOpen, setProjects }) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("High");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    // Disabled
  };

  const handleDrop = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectPayload = {
      name: projectName,
      description,
      priority: priority.toLowerCase(),
      start_date: startDate || null,
      deadline: endDate || null,
      status: "pending",
    };

    try {
      setLoading(true);

      const response = await axios.post(
        "https://collabspace-team-one.newcinderella.online/api/projects",
        projectPayload,
        {
          headers: {
            Authorization: `Bearer 8|3RvEjkCc9qKsuZcwLkjrrMrdeuSGHklTIO4Gm6xZb1247378`,
            "Content-Type": "application/json",
          },
        },
      );

      if (response.data) {
        const newProject = response.data.data || response.data;

        const uiProject = {
          ...newProject,
          filesCount: 0,
        };

        setProjects((prevProjects) => [uiProject, ...prevProjects]);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error creating project:", error);

      if (error.response?.data) {
        console.log(error.response.data);
      }

      alert("فشل في إضافة المشروع بالسيرفر، تأكد من البيانات.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="flex flex-col bg-white rounded-[24px] w-full max-w-xl p-8 relative shadow-xl">
        <div className="flex flex-row items-center justify-between mb-8">
          <h1 className="text-black text-xl font-semibold">New Project</h1>

          <X
            size={20}
            strokeWidth={3}
            className="cursor-pointer text-black hover:opacity-70"
            onClick={() => setIsModalOpen(false)}
          />
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-row gap-4 w-full">
            <div className="w-2/3 relative border border-gray-200 rounded-xl px-3 py-2 flex items-center gap-2">
              <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-400">
                Project Name
              </label>

              <BriefcaseBusiness size={16} className="text-gray-400" />

              <input
                type="text"
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full text-sm text-black focus:outline-none bg-transparent"
                required
              />
            </div>

            <div className="w-1/3 relative border border-gray-200 rounded-xl px-3 py-2">
              <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-400">
                Priority
              </label>

              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full text-sm text-black focus:outline-none bg-transparent cursor-pointer appearance-none"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          <div className="relative border border-gray-200 rounded-xl px-3 py-3">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-400">
              Description
            </label>

            <textarea
              placeholder="Enter project description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full text-sm text-black focus:outline-none bg-transparent resize-none"
              required
            />
          </div>

          <div className="flex flex-row gap-4 w-full">
            <div className="flex-1 relative border border-gray-200 rounded-xl px-3 py-2">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full text-sm text-gray-500 focus:outline-none bg-transparent cursor-pointer"
                required
              />
            </div>

            <div className="flex-1 relative border border-gray-200 rounded-xl px-3 py-2">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full text-sm text-gray-500 focus:outline-none bg-transparent cursor-pointer"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full opacity-50 cursor-not-allowed select-none">
            <span className="text-gray-500 text-xs font-medium pl-1">
              Add Project Files (Disabled)
            </span>

            <input
              type="file"
              ref={fileInputRef}
              disabled
              className="hidden"
            />

            <div
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-2 border-gray-200 bg-gray-50/50 pointer-events-none"
            >
              <UploadCloud
                size={24}
                className="text-gray-400"
              />

              <span className="text-xs text-center px-4">
                <span className="text-gray-400">
                  Drag and drop files or click to upload
                </span>
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3.5 rounded-full font-medium text-sm hover:bg-blue-700 transition mt-2 shadow-lg shadow-blue-600/10 disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Project"}
          </button>
        </form>
      </div>
    </div>
  );
}
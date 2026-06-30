import { useState, useRef } from "react";
import axios from "axios";
import { X, BriefcaseBusiness, UploadCloud } from "lucide-react";

export default function NewProjectModal({ setIsModalOpen, setProjects }) {
  let [projectName, setProjectName] = useState("");
  let [priority, setPriority] = useState("High");
  let [guestInput, setGuestInput] = useState("");
  let [startDate, setStartDate] = useState("");
  let [endDate, setEndDate] = useState("");
  let [loading, setLoading] = useState(false);

  let [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1️⃣ تجهيز البيانات بشكل سليم ومضمون للسيرفر
    const projectPayload = {
      name: projectName,
      priority: priority.toLowerCase(),
      start_date: startDate || null, // لو فاضي ابعته null عشان السيرفر ما يضربش
      deadline: endDate || null,     // لو فاضي ابعته null
    };

    // 2️⃣ السيرفر مستني الـ team كـ IDs حقيقية، لو الـ input فاضي بلاش نبعته خالص عشان الـ Validation
    if (guestInput.trim() !== "") {
      projectPayload.team = [guestInput]; 
    } else {
      projectPayload.team = []; // مصفوفة فاضية تماماً
    }

    try {
      setLoading(true);
      const response = await axios.post(
        'https://collabspace-team-one.newcinderella.online/api/projects',
        projectPayload,
        {
          headers: {
            'Authorization': `Bearer 8|3RvEjkCc9qKsuZcwLkjrrMrdeuSGHklTIO4Gm6xZb1247378`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data) {
        const newProject = response.data.data || response.data;
        
        // هنا بنضمن إن الـ UI يعرض البيانات بالأسماء القديمة بتاعتك عشان جدولك ما يبوظش
        const uiProject = {
          projectName: newProject.name || projectName,
          priority: priority,
          startDate: startDate,
          deadline: endDate,
          status: "Active",
          filesCount: selectedFile ? 1 : 0
        };

        setProjects((prevProjects) => [uiProject, ...prevProjects]);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error creating project:", error);
      
      // 🔥 حركة صايعة: لو ضرب 422، اطبغ رسالة السيرفر بالظبط في الكونسول عشان تقرأ المشكلة فين
      if (error.response && error.response.data) {
        console.log("السيرفر بيقولك الغلط فين بالظبط هنا:", error.response.data);
      }
      
      alert("فشل في إضافة المشروع بالسيرفر، تأكد من البيانات.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
        <div className="flex flex-col bg-white rounded-[24px] w-full max-w-xl p-8 relative shadow-xl">
          {/* Header */}
          <div className="flex flex-row items-center justify-between mb-8">
            <h1 className="text-black text-xl font-semibold">New Project</h1>
            <X
              size={20}
              strokeWidth={3}
              className="cursor-pointer text-black hover:opacity-70"
              onClick={() => setIsModalOpen(false)}
            />
          </div>

          {/* Form Content */}
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

            {/* 2. Add Guests Section */}
            <div className="relative border border-gray-200 rounded-xl px-3 py-2 flex flex-row justify-between items-center w-full">
              <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-400">
                Add Guests
              </label>
              <input
                type="text"
                placeholder="@Anas Mohamed"
                value={guestInput}
                onChange={(e) => setGuestInput(e.target.value)}
                className="w-full text-sm text-black focus:outline-none bg-transparent"
              />
              <button
                type="button"
                className="bg-[#1e1e24] text-white text-xs px-4 py-2 rounded-xl font-medium hover:bg-black flex-shrink-0 transition"
              >
                Add +
              </button>
            </div>

            <div className="flex flex-row gap-4 w-full">
              {/* Start Date */}
              <div className="flex-1 relative border border-gray-200 rounded-xl px-3 py-2">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full text-sm text-gray-500 focus:outline-none bg-transparent cursor-pointer"
                  required
                />
              </div>
              {/* End Date */}
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

            <div className="flex flex-col gap-2 w-full">
              <span className="text-gray-500 text-xs font-medium pl-1">
                Add Project Files
              </span>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />

              <div
                onClick={() => fileInputRef.current.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-2 cursor-pointer transition bg-gray-50/50
                  ${selectedFile ? "border-green-500 bg-green-50/10" : "border-gray-200 hover:border-blue-400"}`}
              >
                <UploadCloud
                  size={24}
                  className={selectedFile ? "text-green-500" : "text-gray-400"}
                />
                <span className="text-xs text-center px-4">
                  {selectedFile ? (
                    <span className="text-green-600 font-medium">
                      ✅ تم اختيار: {selectedFile.name}
                    </span>
                  ) : (
                    <span className="text-gray-400">
                      Drag and drop files or click to upload
                    </span>
                  )}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3.5 rounded-full font-medium text-sm hover:bg-blue-700 transition mt-2 shadow-lg shadow-blue-600/10"
            >
              Add Project
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

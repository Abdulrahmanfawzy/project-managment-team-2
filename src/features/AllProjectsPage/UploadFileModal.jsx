import React, { useState } from "react";
import { X, UploadCloud } from "lucide-react";
import axios from "axios";

export default function UploadFileModal({
  setIsOpen,
  projectId,
  onUploadSuccess,
}) {
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);

      if (!fileName) {
        setFileName(file.name.split(".").slice(0, -1).join("."));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setError("Please select a file first!");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", fileName || selectedFile.name);

    try {
      const response = await axios.post(
        `https://collabspace-team-one.newcinderella.online/api/projects/${projectId}/files`,
        formData,
        {
          headers: {
            Authorization: `Bearer 8|3RvEjkCc9qKsuZcwLkjrrMrdeuSGHklTIO4Gm6xZb1247378`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data) {
        if (onUploadSuccess) {
          const apiFile = response.data.data || response.data;
          onUploadSuccess(apiFile);
        }
        setIsOpen(false);
      }
    } catch (err) {
      console.error(err.response?.data);
      setError(
        err.response?.data?.message ||
          "فشل في رفع الملف، يرجى المحاولة مرة أخرى."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-3xl w-full max-w-md p-6 relative shadow-2xl mx-4">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-black transition"
          disabled={isSubmitting}
        >
          <X size={20} />
        </button>

        <h2 className="text-black font-semibold text-xl mb-5 text-left">
          Upload New File
        </h2>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm mb-4 text-left">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-700 text-sm font-medium">
              File Name
            </label>

            <input
              type="text"
              placeholder="Enter file name..."
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="bg-gray-50 h-10 px-4 border border-gray-200 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black w-full"
              disabled={isSubmitting}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-700 text-sm font-medium">
              Upload File
            </label>

            <label className="border-2 border-dashed border-gray-200 hover:border-blue-500 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer bg-gray-50/50 hover:bg-blue-50/20 transition group">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                disabled={isSubmitting}
              />

              <UploadCloud
                size={40}
                className="text-gray-400 group-hover:text-blue-500 transition"
              />

              <div className="text-center">
                <p className="text-sm font-medium text-gray-700">
                  {selectedFile
                    ? "File selected!"
                    : "Click to upload or drag and drop"}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {selectedFile
                    ? selectedFile.name
                    : "PDF, PNG, JPG, or DOCX up to 10MB"}
                </p>
              </div>
            </label>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition"
              disabled={isSubmitting}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition disabled:bg-blue-400 flex items-center gap-2"
            >
              {isSubmitting ? "Uploading..." : "Upload"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
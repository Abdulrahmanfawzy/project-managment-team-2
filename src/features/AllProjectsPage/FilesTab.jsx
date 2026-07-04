import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import axios from "axios";
import FileDetails from "./FileDetails";
import UploadFileModal from "./UploadFileModal";
import AccessDenied from "./AccessDenied";


export default function FilesTab({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projectAccessDenied, setProjectAccessDenied] = useState(false);

  const fetchFiles = async () => {
    if (!project?.id) return;

    try {
      setLoading(true);
      setProjectAccessDenied(false);

      const response = await axios.get(
        `https://collabspace-team-one.newcinderella.online/api/projects/${project.id}/files`,
        {
          headers: {
            Authorization: `Bearer 8|3RvEjkCc9qKsuZcwLkjrrMrdeuSGHklTIO4Gm6xZb1247378`,
          },
        }
      );

      if (response.data) {
        const fetchedData = response.data.data || response.data;
        setFiles(Array.isArray(fetchedData) ? fetchedData : []);
      }

      setError(null);
    } catch (err) {
      console.error(err);

      if (
        err.response &&
        (err.response.status === 401 || err.response.status === 403)
      ) {
        setProjectAccessDenied(true);
      } else {
        setError("Failed to load files");
      }

      setFiles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, [project?.id]);

  const handleNewFileUpload = (newFile) => {
    setFiles((prevFiles) => [newFile, ...prevFiles]);
  };

  const formatFileSize = (sizeInBytes) => {
    if (!sizeInBytes) return "";
    return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const formatDateOnly = (dateString) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toISOString().split("T")[0];
    } catch (e) {
      return dateString;
    }
  };

  const handleDownloadFile = async (downloadUrl, fileName) => {
    try {
      const response = await axios.get(downloadUrl, {
        responseType: "blob",
        headers: {
          Authorization: `Bearer 8|3RvEjkCc9qKsuZcwLkjrrMrdeuSGHklTIO4Gm6xZb1247378`,
        },
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName || "file";

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  if (loading) {
    return (
      <div className="text-black text-center my-10">
        Loading files...
      </div>
    );
  }

  if (projectAccessDenied) {
    return (
      <AccessDenied
        title="Sorry"
        message="You don't have access to this project from the API"
      />
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-center my-10">
        {error}
      </div>
    );
  }

  if (files.length === 0) {
    return <AccessDenied message="No files found." />;
  }

  return (
    <>
      <h1 className="text-black font-medium my-5 text-xl">
        Recent Files
      </h1>

      <div className="grid grid-cols-3 gap-10">
        {files.slice(0, 3).map((file) => (
          <div
            key={file.id}
            onClick={() =>
              handleDownloadFile(
                file.download_url,
                file.original_name || file.name
              )
            }
            className="cursor-pointer"
          >
            <FileDetails
              title={file.original_name || file.name}
              name={file.uploader?.name || file.uploaded_by || ""}
              size={formatFileSize(file.size)}
              date={formatDateOnly(file.created_at)}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center my-5">
        <h1 className="text-black font-medium text-xl">
          All Files
        </h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm font-normal hover:bg-blue-700 transition shadow-sm"
        >
          Upload File
          <Plus size={16} strokeWidth={2.5} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {files.map((file) => (
          <div
            key={file.id}
            onClick={() =>
              handleDownloadFile(
                file.download_url,
                file.original_name || file.name
              )
            }
            className="cursor-pointer"
          >
            <FileDetails
              title={file.original_name || file.name}
              name={file.uploader?.name || file.uploaded_by || ""}
              size={formatFileSize(file.size)}
              date={formatDateOnly(file.created_at)}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <UploadFileModal
          setIsOpen={setIsModalOpen}
          projectId={project?.id}
          onUploadSuccess={handleNewFileUpload}
        />
      )}
    </>
  );
}
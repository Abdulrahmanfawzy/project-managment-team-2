import FileDetails from "./FileDetails";

const filesData = [
  {
    id: 1,
    title: "Design mockups",
    name: "Ahmed Hassan",
    size: "6.4 MB",
    date: "1h ago",
  },
  {
    id: 2,
    title: "Design mockups",
    name: "Ahmed Hassan",
    size: "6.4 MB",
    date: "1h ago",
  },
  {
    id: 3,
    title: "Design mockups",
    name: "Ahmed Hassan",
    size: "6.4 MB",
    date: "1h ago",
  },
];

export default function FilesTab() {
  return (
    <>
      <h1 className="text-black font-medium my-5 text-xl">Recent Files</h1>
      <div className="grid grid-cols-3 gap-10">
        {filesData.map((file) => (
          <FileDetails
            title={file.title}
            name={file.name}
            size={file.size}
            date={file.date}
          />
        ))}
      </div>
      <h1 className="text-black font-medium my-5 text-xl">All Files</h1>

      <div className="grid grid-cols-3 gap-10">
        {filesData.map((file) => (
          <FileDetails
            title={file.title}
            name={file.name}
            size={file.size}
            date={file.date}
          />
        ))}
      </div>
    </>
  );
}

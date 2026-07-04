export default function Dropdown({
  projectsData,
  setSelectedProjectSelect,
  setIsOpen,
}) {
  return (
    <>
      <div className="flex flex-col gap-2 absolute top-13 bg-white px-5 py-3 w-55 border border-gray-100 rounded-2xl shadow-xl shadow-black/5 z-20">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer"
            onClick={() => {
              setSelectedProjectSelect(project.name);
              setIsOpen(false);
            }}
          >
            {project.name}
          </div>
        ))}
      </div>
    </>
  );
}

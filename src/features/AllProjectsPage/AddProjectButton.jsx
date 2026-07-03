export default function AddProjectButton({setIsModalOpen}) {
  return (
    <>
      <button
        className="text-white bg-blue-600 rounded-xl text-sm px-3 py-1 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        Add Project +
      </button>
    </>
  );
}

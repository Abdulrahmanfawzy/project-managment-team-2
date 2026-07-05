import ProjectFileCard from "./ProjectFileCard";
const ProfilePageFiles = () => {
  return (
    <>
      <section className="grid grid-cols-[repeat(auto-fit,minMax(401px,1fr))] gap-5">
        <ProjectFileCard
          fileName="design wireframe"
          fileCreator="Ahmed Fouad"
          fileStorage="1"
          uploadingTime="1"
        />
        <ProjectFileCard
          fileName="design wireframe"
          fileCreator="Ahmed Fouad"
          fileStorage="1"
          uploadingTime="1"
        />
        <ProjectFileCard
          fileName="design wireframe"
          fileCreator="Ahmed Fouad"
          fileStorage="1"
          uploadingTime="1"
        />
      </section>
    </>
  );
};

export default ProfilePageFiles;

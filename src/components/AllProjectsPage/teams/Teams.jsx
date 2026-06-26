import { teamsData } from "../../../features/tasks/api/teams.js";
import GroubContainer from "./GroubContainer.jsx";

export default function Teams() {
  const currentProjectId = 1; // ثابت للتجربة حالياً

  const currentProject = teamsData.teams.find(
    (p) => p.projectId === currentProjectId
  );
  return (
    <>
      <GroubContainer sections={currentProject.teamSections} />
    </>
  );
}
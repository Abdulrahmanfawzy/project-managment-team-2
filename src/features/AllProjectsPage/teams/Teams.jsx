import { useEffect, useState } from "react";
import axios from "axios";
import GroubContainer from "./GroubContainer";
import AccessDenied from "../AccessDenied";

export default function Teams({ projectId }) {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `https://collabspace-team-one.newcinderella.online/api/projects/${projectId}/teams`,
          {
            headers: {
              Authorization: `Bearer 8|3RvEjkCc9qKsuZcwLkjrrMrdeuSGHklTIO4Gm6xZb1247378`,
            },
          }
        );

        setTeams(response.data.data || []);
      } catch (error) {
        console.error(error);
        setTeams([]);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchTeams();
    }
  }, [projectId]);

  if (loading) {
    return null; // أو <Loading /> لو عندك
  }

  if (teams.length === 0) {
    return <AccessDenied message="No teams found." />;
  }

  return <GroubContainer sections={teams} />;
}
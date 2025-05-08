import { useEffect, useState } from "react";
import { Candidate } from "../interfaces/Candidate.interface.tsx";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem("savedCandidates");
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  const removeCandidate = (id: number) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.id !== id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
    <div className="saved-candidates-container">
      <h2>Saved Candidates</h2>
      {savedCandidates.length > 0 ? (
        <table className="candidates-table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Username</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map(candidate => (
              <tr key={candidate.id}>
                <td><img src={candidate.avatar_url} alt={candidate.login} width="50" /></td>
                <td><a href={candidate.html_url} target="_blank">{candidate.login}</a></td>
                <td>{candidate.location || "Unknown"}</td>
                <td>{candidate.email || "Not available"}</td>
                <td>{candidate.company || "Not listed"}</td>
                <td>{candidate.bio || "No bio available"}</td>
                <td>
                  <button className="remove-btn" onClick={() => removeCandidate(candidate.id)}>❌ Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates have been saved yet.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
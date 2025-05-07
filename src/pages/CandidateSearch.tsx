import { useState, useEffect } from "react";
import { searchGithub } from "../api/API";

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<any>(null);
  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);

  // Load saved candidates from LocalStorage on page load
  useEffect(() => {
    const storedCandidates = localStorage.getItem("savedCandidates");
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
    fetchCandidate();
  }, []);

  // Update LocalStorage whenever savedCandidates changes
  useEffect(() => {
    localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
  }, [savedCandidates]);

  const fetchCandidate = async () => {
    const candidates = await searchGithub();
    if (candidates.length > 0) {
      setCandidate(candidates[0]); // Show first candidate
    } else {
      setCandidate(null); // No more candidates
    }
  };

  const handleSaveCandidate = () => {
    setSavedCandidates([...savedCandidates, candidate]);
    fetchCandidate();
  };

  const handleSkipCandidate = () => {
    fetchCandidate();
  };

  return (
    <div>
      <h1>Candidate Search</h1>

      {candidate ? (
        <div>
          <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} />
          <h2>{candidate.login}</h2>
          <p>Location: {candidate.location || "Unknown"}</p>
          <p>Company: {candidate.company || "Not specified"}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
          <div>
            <button onClick={handleSaveCandidate}>+</button>
            <button onClick={handleSkipCandidate}>-</button>
          </div>
        </div>
      ) : (
        <p>No more candidates available</p>
      )}

      <h2>Saved Candidates</h2>
      {savedCandidates.length > 0 ? (
        <ul>
          {savedCandidates.map((saved) => (
            <li key={saved.login}>
              <img src={saved.avatar_url} alt={`${saved.login}'s avatar`} />
              <p>{saved.login}</p>
              <p>Location: {saved.location || "Unknown"}</p>
              <p>Company: {saved.company || "Not specified"}</p>
              <a href={saved.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates have been accepted yet.</p>
      )}
    </div>
  );
};

export default CandidateSearch;
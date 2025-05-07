import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<any>(null);
  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);

  useEffect(() => {
    fetchCandidate();
  }, []);

  const fetchCandidate = async () => {
    const candidates = await searchGithub();
    if (candidates.length > 0) {
      setCandidate(candidates[0]); // Display first candidate
    } else {
      setCandidate(null); // No candidates available
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
    </div>
  );
};

export default CandidateSearch;
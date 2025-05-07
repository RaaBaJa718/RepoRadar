import { Candidate } from "../interfaces/Candidate.interface.tsx";

// Fetch multiple candidates from GitHub's API
export const searchGithub = async (): Promise<Candidate[]> => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(`https://api.github.com/users?since=${start}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    console.log("API Response Status:", response.status); // Debugging log

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetched Candidates:", data); // Debugging log

    return data.map((user: any) => ({
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,
      html_url: user.html_url,
    }));
  } catch (err) {
    console.error("API Fetch Error:", err);
    return [];
  }
};

// Fetch detailed candidate information by username
export const searchGithubUser = async (username: string): Promise<Candidate | null> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    console.log(`Fetching Candidate Details for: ${username}`);
    console.log("API Response Status:", response.status);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetched Candidate Data:", data);

    return {
      id: data.id,
      login: data.login,
      avatar_url: data.avatar_url,
      html_url: data.html_url,
      name: data.name || "Unknown",
      location: data.location || "Unknown",
      email: data.email,
      company: data.company || "Not listed",
      bio: data.bio || "No bio available",
    };
  } catch (err) {
    console.error("User Fetch Error:", err);
    return null;
  }
};
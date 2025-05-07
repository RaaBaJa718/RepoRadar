export interface Candidate {
    id: number; // Unique GitHub user ID
    login: string; // GitHub username
    avatar_url: string; // Profile picture URL
    html_url: string; // GitHub profile link
    name?: string; // Full name (may be undefined)
    location?: string; // User's location (optional)
    email?: string | null; // Email (may be null)
    company?: string; // Associated company (optional)
    bio?: string; // Short bio (optional)
  }
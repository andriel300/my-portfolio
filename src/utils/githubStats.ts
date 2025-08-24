export interface GitHubStats {
  yearsOfExperience: number;
  completedProjects: number;
  masteredTechnologies: number;
  totalContributions: number;
}

const username = process.env.GITHUB_USERNAME || 'andriel300';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ''; // Optional: for higher rate limits

/**
 * Fetch total commit count using GitHub GraphQL API
 */
async function getTotalCommitCount(username: string): Promise<number> {
  try {
    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
          }
          repositories(first: 100, ownerAffiliations: OWNER) {
            nodes {
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(author: {id: "${username}"}) {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return 0;
    }

    // Get contributions from public repositories
    const publicContributions = data.data.user.contributionsCollection.totalCommitContributions;
    
    // Get contributions from user's own repositories
    let ownRepositoryContributions = 0;
    if (data.data.user.repositories.nodes) {
      for (const repo of data.data.user.repositories.nodes) {
        if (repo.defaultBranchRef?.target?.history?.totalCount) {
          ownRepositoryContributions += repo.defaultBranchRef.target.history.totalCount;
        }
      }
    }

    // Return the larger of the two counts (they might overlap)
    return Math.max(publicContributions, ownRepositoryContributions);
    
  } catch (error) {
    console.error('Error fetching commit count via GraphQL:', error);
    return 0;
  }
}

export async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  try {
    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userResponse.json();

    // Fetch repositories
    const repositoriesResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`
    );
    const repositoriesData = await repositoriesResponse.json();

    // Calculate years of experience
    const accountCreationDate = new Date(userData.created_at);
    const yearsOfExperience = new Date().getFullYear() - accountCreationDate.getFullYear();

    // Get completed projects (public repos)
    const completedProjects = userData.public_repos;

    // Get total contributions using GraphQL
    const totalContributions = await getTotalCommitCount(username);

    // If GraphQL fails, fall back to counting repositories
    const finalContributions = totalContributions > 0 ? totalContributions : completedProjects * 10;

    // Count unique languages for mastered technologies
    const languages = new Set<string>();
    for (const repo of repositoriesData) {
      if (repo.language) {
        languages.add(repo.language);
      }
    }
    const masteredTechnologies = languages.size;

    return {
      yearsOfExperience,
      completedProjects,
      masteredTechnologies,
      totalContributions: finalContributions
    };
  } catch (error) {
    console.error("Error Fetching GitHub Stats:", error);
    // Return default values if API fails
    return {
      yearsOfExperience: 3,
      completedProjects: 15,
      masteredTechnologies: 20,
      totalContributions: 599,
    };
  }
}

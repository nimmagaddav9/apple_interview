import type { Repo, RepoStatus } from '../types';

type RepositoryPanelProps = {
  repos: Repo[];
  selectedRepo: Repo;
  search: string;
  filter: RepoStatus | 'All';
  onSearchChange: (value: string) => void;
  onFilterChange: (value: RepoStatus | 'All') => void;
  onRepoSelect: (repo: Repo) => void;
};

export function RepositoryPanel({
  repos,
  selectedRepo,
  search,
  filter,
  onSearchChange,
  onFilterChange,
  onRepoSelect,
}: RepositoryPanelProps) {
  return (
    <section className="panel">
      <h2>Repositories</h2>
      <p className="muted">Choose a repository to inspect.</p>

      <input
        className="field"
        placeholder="Search repositories..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <select
        className="field"
        value={filter}
        onChange={(event) =>
          onFilterChange(event.target.value as RepoStatus | 'All')
        }
      >
        <option value="All">All statuses</option>
        <option value="Healthy">Healthy</option>
        <option value="Warning">Warning</option>
        <option value="Critical">Critical</option>
      </select>

      <div className="repo-list">
        {repos.map((repo) => (
          <button
            key={repo.id}
            className={`repo-card ${
              selectedRepo.id === repo.id ? 'selected' : ''
            }`}
            onClick={() => onRepoSelect(repo)}
          >
            <div className="repo-top">
              <strong>{repo.name}</strong>
              <span className={`badge ${repo.status.toLowerCase()}`}>
                {repo.status}
              </span>
            </div>
            <p>
              {repo.owner} • {repo.language}
            </p>
            <small>{repo.description}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

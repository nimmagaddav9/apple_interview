import type { AgentStatus, AgentTask, Repo } from '../types';

type ExecutionDrawerProps = {
  selectedRepo: Repo;
  selectedTask: AgentTask;
  status: AgentStatus;
  onClose: () => void;
};

export function ExecutionDrawer({
  selectedRepo,
  selectedTask,
  status,
  onClose,
}: ExecutionDrawerProps) {
  return (
    <div className="drawer-backdrop">
      <aside className="drawer">
        <button className="close" onClick={onClose}>
          ×
        </button>

        <h2>Execution Details</h2>
        <p className="muted">Mock summary for the current agent run.</p>

        <div className="detail">
          <span>Repository</span>
          <strong>{selectedRepo.name}</strong>
        </div>

        <div className="detail">
          <span>Owner</span>
          <strong>{selectedRepo.owner}</strong>
        </div>

        <div className="detail">
          <span>Task</span>
          <strong>{selectedTask}</strong>
        </div>

        <div className="detail">
          <span>Status</span>
          <strong>{status}</strong>
        </div>

        <div className="detail">
          <span>Execution type</span>
          <strong>Mock streaming simulation</strong>
        </div>

        <div className="summary">
          <h3>Why this UX?</h3>
          <p>
            The UI keeps repository selection, repository insights, and agent
            execution visible at the same time. This helps developers stay
            oriented while running AI automation and watching progress in real
            time.
          </p>
        </div>
      </aside>
    </div>
  );
}

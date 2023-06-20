export function FormProgressBar({ currentPercentage }) {
  return (
    <div className="progress mb-3">
      <div
        className="progress-bar"
        role="progressbar"
        aria-label="Progress bar"
        style={{ width: `${currentPercentage}%` }}
        aria-valuenow={currentPercentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {currentPercentage}%
      </div>
    </div>
  );
}

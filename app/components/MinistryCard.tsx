interface MinistryCardProps {
  title: string;
  description: string;
  leader?: string;
  meetingTime?: string;
}

export default function MinistryCard({ title, description, leader, meetingTime }: MinistryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h4 className="mb-3">{title}</h4>
      <p className="text-sm mb-4">{description}</p>
      {leader && (
        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          <strong>Leader:</strong> {leader}
        </p>
      )}
      {meetingTime && (
        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          <strong>Meets:</strong> {meetingTime}
        </p>
      )}
    </div>
  );
}

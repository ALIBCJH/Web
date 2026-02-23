interface SermonCardProps {
  title: string;
  speaker: string;
  date: string;
  scripture: string;
  description: string;
}

export default function SermonCard({ title, speaker, date, scripture, description }: SermonCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="h-48 flex items-center justify-center"
        style={{ backgroundColor: 'var(--color-grey-200)' }}
      >
        <div className="text-center">
          <div 
            className="text-4xl font-bold mb-2"
            style={{ color: 'var(--color-light-blue)' }}
          >
            📖
          </div>
          <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
            {scripture}
          </p>
        </div>
      </div>
      <div className="p-6">
        <h4 className="mb-2">{title}</h4>
        <p className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>
          <strong>Speaker:</strong> {speaker}
        </p>
        <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>
          <strong>Date:</strong> {date}
        </p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

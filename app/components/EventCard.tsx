interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export default function EventCard({ title, date, time, location, description }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div 
          className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3"
          style={{ 
            backgroundColor: 'var(--color-light-blue)', 
            color: 'var(--color-text-light)' 
          }}
        >
          {date}
        </div>
        <h4 className="mb-2">{title}</h4>
        <p className="text-sm mb-2" style={{ color: 'var(--color-text-secondary)' }}>
          <strong>Time:</strong> {time}
        </p>
        <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>
          <strong>Location:</strong> {location}
        </p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

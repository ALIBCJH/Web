interface ValueCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <div className="text-center">
      <div 
        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
        style={{ backgroundColor: 'var(--color-light-blue)' }}
      >
        {icon && <span className="text-2xl text-white">{icon}</span>}
      </div>
      <h4>{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}

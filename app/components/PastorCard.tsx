interface PastorCardProps {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
}

export default function PastorCard({ name, title, bio, imageUrl }: PastorCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="w-full h-64 bg-grey-300">
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-6 text-center">
        <h4>{name}</h4>
        <p className="text-sm" style={{ color: 'var(--color-grey-600)' }}>{title}</p>
        <p className="text-sm mt-3">{bio}</p>
      </div>
    </div>
  );
}

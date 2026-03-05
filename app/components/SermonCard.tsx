interface SermonCardProps {
  title: string;
  speaker: string;
  date: string;
  scripture: string;
  description: string;
}

export default function SermonCard({ title, speaker, date, scripture, description }: SermonCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-purple-100">
      <div 
        className="h-48 flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-400"
      >
        <div className="text-center">
          <div 
            className="text-4xl font-bold mb-2 text-white"
          >
            📖
          </div>
          <p className="text-sm font-medium text-white/90">
            {scripture}
          </p>
        </div>
      </div>
      <div className="p-6">
        <h4 className="mb-2 text-slate-900 font-bold text-xl">{title}</h4>
        <p className="text-sm mb-1 text-slate-600">
          <strong>Speaker:</strong> {speaker}
        </p>
        <p className="text-sm mb-3 text-slate-600">
          <strong>Date:</strong> {date}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface SermonCardProps {
  title: string;
  speaker: string;
  date: string;
  scripture: string;
  description: string;
}

export default function SermonCard({ title, speaker, date, scripture, description }: SermonCardProps) {
  return (
    <div className="bg-white dark:bg-[#1a1a2e] rounded-lg shadow-md overflow-hidden transition-colors duration-300 hover:shadow-xl">
      <div 
        className="h-48 flex items-center justify-center bg-purple-100 dark:bg-[#0F172A] transition-colors duration-300"
      >
        <div className="text-center">
          <div 
            className="text-4xl font-bold mb-2"
          >
            📖
          </div>
          <p className="text-sm font-medium text-slate-600 dark:text-white/70 transition-colors duration-300">
            {scripture}
          </p>
        </div>
      </div>
      <div className="p-6">
        <h4 className="mb-2 text-slate-900 dark:text-white transition-colors duration-300">{title}</h4>
        <p className="text-sm mb-1 text-slate-600 dark:text-white/70 transition-colors duration-300">
          <strong>Speaker:</strong> {speaker}
        </p>
        <p className="text-sm mb-3 text-slate-600 dark:text-white/70 transition-colors duration-300">
          <strong>Date:</strong> {date}
        </p>
        <p className="text-sm text-slate-600 dark:text-white/60 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
}

interface ValueCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <div className="text-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300">
      <div 
        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-purple-200 dark:bg-[#C5A059] transition-colors duration-300"
      >
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      <h4 className="text-slate-900 dark:text-white mb-2 transition-colors duration-300">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-white/70 transition-colors duration-300">{description}</p>
    </div>
  );
}

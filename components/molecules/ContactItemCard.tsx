import React from 'react';

type Props = {
  href: string;
  icon: React.ReactNode;
  title: string;
  value: string;
};

export default function ContactItemCard({ href, icon, title, value }: Props) {
  return (
    <a key={title} href={href} className="group relative block">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg sm:rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800 group-hover:border-emerald-500/50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 transition-all duration-300 hover:transform hover:scale-105">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg sm:rounded-xl flex items-center justify-center text-emerald-400 group-hover:text-teal-400 transition-colors duration-300 border border-emerald-500/30">
            {icon}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">{title}</h4>
            <p className="text-gray-400 group-hover:text-emerald-400 transition-colors duration-300 text-xs sm:text-sm break-words">{value}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

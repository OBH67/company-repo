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
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800 group-hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center text-emerald-400 group-hover:text-teal-400 transition-colors duration-300 border border-emerald-500/30">
            {icon}
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">{title}</h4>
            <p className="text-gray-400 group-hover:text-emerald-400 transition-colors duration-300">{value}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

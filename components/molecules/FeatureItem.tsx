import React from 'react';

type Props = { icon: React.ReactNode; title: string; subtitle: string };

export default function FeatureItem({ icon, title, subtitle }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/20">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}

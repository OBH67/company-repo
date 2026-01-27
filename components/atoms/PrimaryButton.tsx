import React from 'react';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
};

export default function PrimaryButton({
  children,
  type = 'button',
  disabled = false,
  loading = false,
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="group/btn relative w-full overflow-hidden rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-60"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300 group-hover/btn:from-emerald-500 group-hover/btn:to-teal-500"></div>
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100">
        <div className="absolute inset-0 bg-emerald-500 blur-xl"></div>
      </div>
      <span className="relative z-10 text-lg text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
        {loading ? 'Enviando...' : children}
      </span>
      <div className="absolute inset-0 rounded-xl border-2 border-teal-400/0 transition-all duration-300 group-hover/btn:border-teal-400/50"></div>
    </button>
  );
}

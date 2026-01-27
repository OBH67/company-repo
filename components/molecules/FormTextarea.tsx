import React from 'react';

type Props = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  focused?: boolean;
};

export default function FormTextarea({ id, name, label, value, onChange, onFocus, onBlur, rows = 5, placeholder, required, focused }: Props) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 bg-gray-800/50 border ${focused ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'border-gray-700'} rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none`}
      />
    </div>
  );
}

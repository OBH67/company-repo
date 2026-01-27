import React from 'react';

type Option = { value: string; label: string };
type Props = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  options: Option[];
  required?: boolean;
  focused?: boolean;
};

export default function FormSelect({ id, name, label, value, onChange, onFocus, onBlur, options, required, focused }: Props) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        className={`w-full px-4 py-3 bg-gray-800/50 border ${focused ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'border-gray-700'} rounded-xl text-white focus:outline-none transition-all duration-300`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

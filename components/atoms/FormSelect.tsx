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

export default function FormSelect({
  id,
  name,
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  options,
  required,
  focused,
}: Props) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-400">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        className={`w-full border bg-gray-800/50 px-3 py-2.5 sm:px-4 sm:py-3 ${focused ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'border-gray-700'} rounded-lg sm:rounded-xl text-sm sm:text-base text-white transition-all duration-300 focus:outline-none`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

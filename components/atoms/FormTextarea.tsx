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

export default function FormTextarea({
  id,
  name,
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  rows = 5,
  placeholder,
  required,
  focused,
}: Props) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-400">
        {label}
      </label>
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
        className={`w-full border bg-gray-800/50 px-3 py-2.5 sm:px-4 sm:py-3 ${focused ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'border-gray-700'} resize-none rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none`}
      />
    </div>
  );
}

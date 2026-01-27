import React from 'react';

type Props = {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  placeholder?: string;
  required?: boolean;
  focused?: boolean;
};

export default function FormInput({ id, name, label, type = 'text', value, onChange, onFocus, onBlur, placeholder, required, focused }: Props) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          className={`w-full px-4 py-3 bg-gray-800/50 border ${focused ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'border-gray-700'} rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300`}
        />
      </div>
    </div>
  );
}

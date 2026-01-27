import React from 'react';

type Props = {
  message?: string | null;
  error?: string | null;
};

export default function FormStatus({ message, error }: Props) {
  if (!message && !error) return null;
  return (
    <div>
      {message && <div className="mt-4 text-sm text-green-400">{message}</div>}
      {error && <div className="mt-4 text-sm text-red-400">{error}</div>}
    </div>
  );
}

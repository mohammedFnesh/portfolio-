import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function TextArea({ label, error, className = '', ...props }: TextAreaProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <textarea
        className={`w-full px-4 py-2 bg-gray-800 border ${
          error ? 'border-red-500' : 'border-gray-700'
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search for a cocktail..."
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-200"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-200 w-5 h-5" />
    </div>
  );
}
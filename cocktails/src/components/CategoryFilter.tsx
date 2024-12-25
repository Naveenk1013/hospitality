import React from 'react';
import { Wine } from 'lucide-react';

interface CategoryFilterProps {
  currentCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ currentCategory, onCategoryChange }: CategoryFilterProps) {
  const categories = [
    { id: 'all', name: 'All Cocktails' },
    { id: 'vodka', name: 'Vodka' },
    { id: 'gin', name: 'Gin' },
    { id: 'rum', name: 'Rum' },
    { id: 'tequila', name: 'Tequila' },
    { id: 'whiskey', name: 'Whiskey' },
    { id: 'other', name: 'Other' }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
            currentCategory === category.id
              ? 'bg-purple-500 text-white'
              : 'bg-white/10 hover:bg-white/20 text-purple-200'
          }`}
        >
          <Wine className="w-4 h-4" />
          {category.name}
        </button>
      ))}
    </div>
  );
}
import React from 'react';
import { Cocktail } from '../types';

interface CocktailListProps {
  cocktails: Cocktail[];
  selectedCocktail: Cocktail | null;
  onSelect: (cocktail: Cocktail) => void;
}

export function CocktailList({ cocktails, selectedCocktail, onSelect }: CocktailListProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-[600px] overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Cocktails</h2>
      <div className="space-y-2">
        {cocktails.map((cocktail) => (
          <button
            key={cocktail.name}
            onClick={() => onSelect(cocktail)}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              selectedCocktail?.name === cocktail.name
                ? 'bg-purple-500'
                : 'bg-white/5 hover:bg-white/20'
            }`}
          >
            {cocktail.name}
          </button>
        ))}
      </div>
    </div>
  );
}
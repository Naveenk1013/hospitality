import React from 'react';
import { Wine } from 'lucide-react';
import { Cocktail } from '../types';

interface CocktailDetailsProps {
  cocktail: Cocktail | null;
}

export function CocktailDetails({ cocktail }: CocktailDetailsProps) {
  if (!cocktail) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-purple-200">
        <Wine className="w-16 h-16 mb-4" />
        <p>Select a cocktail to see its details</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{cocktail.name}</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Glass</h3>
          <p className="text-purple-200">{cocktail.glass}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Mixing Method</h3>
          <p className="text-purple-200">{cocktail.mixingMethod}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Garnish</h3>
          <p className="text-purple-200">{cocktail.garnish || 'None'}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
          <p className="text-purple-200">{cocktail.ingredients}</p>
        </div>
        {cocktail.note && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Note</h3>
            <p className="text-purple-200">{cocktail.note}</p>
          </div>
        )}
      </div>
    </div>
  );
}
import React from 'react';
import { GlassWater } from 'lucide-react';

export function Header() {
  return (
    <header className="py-6 px-4 text-center">
      <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
        <GlassWater className="w-8 h-8" />
        Cocktail Master
      </h1>
      <p className="text-purple-200">Discover the perfect cocktail recipe</p>
    </header>
  );
}
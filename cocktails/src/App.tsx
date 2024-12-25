import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { CocktailList } from './components/CocktailList';
import { CocktailDetails } from './components/CocktailDetails';
import { categories } from './data/cocktailData';
import { Cocktail } from './types';

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [selectedCocktail, setSelectedCocktail] = useState<Cocktail | null>(null);

  const filteredCocktails = categories[category as keyof typeof categories].filter(cocktail => 
    cocktail.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setSelectedCocktail(null);
  }, []);

  const handleCategoryChange = useCallback((newCategory: string) => {
    setCategory(newCategory);
    setSelectedCocktail(null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <SearchBar value={search} onChange={handleSearch} />
        <CategoryFilter currentCategory={category} onCategoryChange={handleCategoryChange} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CocktailList
            cocktails={filteredCocktails}
            selectedCocktail={selectedCocktail}
            onSelect={setSelectedCocktail}
          />
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-[600px] overflow-y-auto">
            <CocktailDetails cocktail={selectedCocktail} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
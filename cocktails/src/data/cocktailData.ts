import { vodkaCocktails } from './categories/vodka';
import { ginCocktails } from './categories/gin';
import { rumCocktails } from './categories/rum';
import { tequilaCocktails } from './categories/tequila';
import { whiskeyCocktails } from './categories/whiskey';
import { otherCocktails } from './categories/other';
import { Cocktail } from '../types';

const cocktailData: Cocktail[] = [
  ...vodkaCocktails,
  ...ginCocktails,
  ...rumCocktails,
  ...tequilaCocktails,
  ...whiskeyCocktails,
  ...otherCocktails
];

export const categories = {
  all: cocktailData,
  vodka: vodkaCocktails,
  gin: ginCocktails,
  rum: rumCocktails,
  tequila: tequilaCocktails,
  whiskey: whiskeyCocktails,
  other: otherCocktails
};

export default cocktailData;
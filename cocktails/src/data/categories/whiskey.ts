import { Cocktail } from '../../types';

export const whiskeyCocktails: Cocktail[] = [
  {
    name: "SAZERAC",
    glass: "Bucket",
    mixingMethod: "Muddle, stir, strain",
    garnish: "Lemon twist",
    ingredients: "2 oz. Rye Whiskey, sugar cube, Peychaud's bitters, absinthe"
  },
  {
    name: "MINT JULEP",
    glass: "Copper mug or bucket",
    mixingMethod: "Muddle, shake & strain",
    garnish: "Mint sprig",
    ingredients: "2 oz. Bourbon, sugar, mint, water"
  },
  {
    name: "OLD FASHIONED",
    glass: "Bucket",
    mixingMethod: "Muddle, roll",
    garnish: "Orange peels",
    ingredients: "2 oz. Bourbon or rye, sugar, Angostura bitters, splash of soda",
    note: "Classic version is orange or peel only. Modern version is orange slices and cherries muddled."
  },
  {
    name: "MANHATTAN",
    glass: "Martini or rocks",
    mixingMethod: "Stirred & strained in martini glass or on the rocks",
    garnish: "Cherry",
    ingredients: "2 oz. Bourbon, ¾ oz. sweet vermouth, Angostura bitters"
  }
];
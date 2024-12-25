interface Cocktail {
  name: string;
  glass: string;
  mixingMethod: string;
  garnish: string;
  ingredients: string;
  note?: string;
}

const cocktailData: Cocktail[] = [
  {
    name: "SCREWDRIVER",
    glass: "Bucket",
    mixingMethod: "Build",
    garnish: "Orange",
    ingredients: "1½ oz. Vodka, OJ"
  },
  {
    name: "CAPE COD",
    glass: "Bucket",
    mixingMethod: "Build",
    garnish: "Lime",
    ingredients: "1½ oz. Vodka, cranberry"
  },
  // ... Add all 101 cocktails here following the same structure
  {
    name: "PINK SQUIRREL",
    glass: "Martini",
    mixingMethod: "Shake & strain",
    garnish: "None",
    ingredients: "¾ oz. crème de noyaux, ¾ oz. white crème de cacao, cream"
  }
];

export default cocktailData;
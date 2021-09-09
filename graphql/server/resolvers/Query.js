const { animals, mainCards, categories } = require('../db');

const Query = {
  mainCards: () => mainCards,
  animals: () => animals,
  animal: (parent, args, ctx) => {
    let animal = animals.find((animal) => animal.slug === args.slug);
    return animal;
  },
  categories: () => categories,
  category: (parent, args, ctx) => {
    let categoryFound = categories.find(
      (category) => category.slug === args.slug
    );
    return categoryFound;
  },
};

module.exports = Query;

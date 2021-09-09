const { animals } = require('../db');

const Category = {
  animals: (parent, args, ctx) => {
    let animalsFound = animals.filter(
      (animal) => animal.category === parent.id
    );
    return animalsFound;
  },
};

module.exports = Category;

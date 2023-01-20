const axios = require("axios");

const { Query } = require("mongoose");

const resolvers = {
  Query: {
    async getPokemon() {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      console.log(response.data);

      return [];
    },
    getRandomImage() {},
  },
};

module.exports = { resolvers };

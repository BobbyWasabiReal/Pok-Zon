require("dotenv").config();
require("./config/database");
const BASE_URL = "https://pokeapi.co/api/v2/item?limit=100";
const Item = require("./models/item");

// Fetch all items from the API
async function fetchItems() {
  try {
    const items = await fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((data) => data.results);
    for (item of items) {
      const itemData = await fetch(item.url).then((res) => res.json());
      const exists = await Item.exists({ name: item.name });
      if (!exists) {
        await Item.create({
          name: item.name,
          price: itemData.cost,
          description: itemData.flavor_text_entries[0].text,
          category: itemData.category.name,
          image: itemData.sprites.default,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
}
fetchItems();

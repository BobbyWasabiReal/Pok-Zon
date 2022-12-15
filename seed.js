require('dotenv').config();
require('./config/database');
const fetch = require('node-fetch');
const BASE_URL = 'https://pokeapi.co/api/v2/item/limit=100';
const Item = require('./models/item');

// Fetch all items from the API
async function fetchItems() {
    
}

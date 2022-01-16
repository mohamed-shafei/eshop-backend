const db= require('../../config/db');
const SHA256 = require("crypto-js/sha256");

module.exports = class Product{

    constructor( name, img, description, category, price, quantity, reviews, rating){
        this.name = name; 
        this.img = img; 
        this.description = description;
        this.category = category;
        this.reviews = reviews;
        this.rating = rating;
        this.price = price;
        this.quantity = quantity;
    }

    async save(){
        const id = SHA256(this.name).toString();
        return await db.query('INSERT INTO products(id, name, img, description, category, reviews, rating, price, quantity) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);', [id, this.name, this.img, this.description, this.category, this.reviews, this.rating, this.price, this.quantity]);
    }
    static async getAllProducts(){
        const result = await db.query('SELECT * FROM products');
        return result;

    }

    static async getProduct(id){
        return db.query('SELECT name, img, description, category, reviews, rating, price, quantity FROM products where id = $1;', [id]);
    }
    // take prod_id, quantity -- 
};
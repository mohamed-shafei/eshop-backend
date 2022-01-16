const pool= require('../../config/db');
module.exports = class Cart{

    constructor(user_id, products_ids){
        
        this.user_id = user_id;
        this.products_ids = products_ids;
    }

    static async getCart(user_id){
        let products;
        await pool.query('SELECT products_ids FROM cart WHERE user_id = $1;', [user_id])
            .then((value) => {
                if(value.rows.length > 0)
                    products = pool.query('SELECT * from products WHERE id = ANY($1::varchar[]);', [value.rows[0].products_ids]);
            })
            return products;
    }

    async save(){
        await pool
            .query('SELECT products_ids FROM cart WHERE user_id = $1;', [this.user_id])
            .then((value) => {
                if(value.rows.length == 0){
                    pool.query('INSERT INTO cart(user_id, products_ids) VALUES ($1, $2);', [this.user_id, this.products_ids]);
                }else{
                    pool.query('UPDATE cart SET products_ids = $2 WHERE user_id = $1;', [this.user_id, this.products_ids]);
                }
            })
            .catch(err => console.log(err));
        
        return Promise.resolve(0);
    }
};
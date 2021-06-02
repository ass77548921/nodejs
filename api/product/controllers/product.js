'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    shopPage: async (ctx) => {
        const data = await strapi.services.product.find();
        console.log("data",data);
        return await ctx.render("products_xx",{
            data,
            title: "shop products",
        });
    },


   categoryPage: async (ctx) => {
        const category = ctx.params.category;
        //console.log("category",category);
        const cat = await strapi.services.category.findOne({name: category});
        //console.log('cat',category,cat.cid);
        const data = await strapi.connections.default.raw(` SELECT * FROM products where category = ${cat.id}`);
        //console.log('data',JSON.stringify(data));
        return await ctx.render("products_xx",{
            data,
            title: "shop products",
        });
    },

    overviewPage: async (ctx) => {
        let data = {};
        try{
            const entities = await strapi.services.category.find();
            data.hats = entities[0].products;
            data.jackets = entities[1].products; 
            data.sneakers = entities[2].products;
            data.womens = entities[3].products;
            data.mens = entities[4].products;
            
            return await ctx.render("overview",{
                data,
                title: "shop overview",
                count: 4
            });
        }catch(err){
            console.log(err);
        }
    }
    
    
};

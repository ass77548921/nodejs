"use strict";
module.exports = {
  homepage: async (ctx) => {
    let entities;
    entities = await strapi.services.category.find();
    // console.log("entities", entities);
    return await ctx.render("crown2_69", {
      data: entities,
      title: "Crown - LIU YU-HAO, 408410669",
    });
  },
};
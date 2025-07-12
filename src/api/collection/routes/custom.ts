import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::collection.collection", {
  only: ["findOne"],
  config: {
    findOne: {
      auth: false,
      policies: [],
      middlewares: [],
    },
  },
});

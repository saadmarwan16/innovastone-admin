/**
 * collection controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::collection.collection",
  ({ strapi }) => ({
    async findOne(ctx) {
      await this.validateQuery(ctx);
      const populate = ctx.query.populate as unknown;
      const fields = ctx.query.fields as unknown as any;
      const locale = ctx.query.locale as string | undefined;
      const { id } = ctx.params;
      const results = (await strapi.db
        .query("api::collection.collection")
        .findOne({
          where: { slug: id },
          select: ["documentId"],
        })) as
        | {
            documentId: string | undefined;
          }
        | undefined;
      if (results?.documentId) {
        const document = await strapi
          .documents("api::collection.collection")
          .findOne({
            documentId: results.documentId,
            populate: populate,
            fields: fields,
            locale: locale ?? "en",
          });
        const sanitizedDocument = await this.sanitizeOutput(document, ctx);

        return this.transformResponse(sanitizedDocument);
      } else {
        const sanitizedResults = await this.sanitizeOutput(results, ctx);

        return this.transformResponse(sanitizedResults);
      }
    },
  })
);

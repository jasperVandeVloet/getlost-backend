// 'use strict';

// /**
//  * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
//  * to customize this controller
//  */

// module.exports = {};
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.walk.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.walk });
  },
};

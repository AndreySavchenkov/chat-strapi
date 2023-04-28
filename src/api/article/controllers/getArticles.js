'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    const user = ctx.state.user; // Получаем информацию о пользователе из контекста запроса
    if (!user) {
      return ctx.unauthorized('You are not authorized to perform this action.'); // Если пользователь не авторизован, возвращаем ошибку 401
    }
    const articles = await strapi.services.article.find({ user: user.id }); // Ищем все статьи, связанные с пользователем
    return articles.map(article => sanitizeEntity(article, { model: strapi.models.article })); // Возвращаем найденные статьи
  },
};

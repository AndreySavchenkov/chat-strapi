'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async create(ctx) {
    const user = ctx.state.user; // Получаем информацию о пользователе из контекста запроса
    if (!user) {
      return ctx.unauthorized('You are not authorized to perform this action.'); // Если пользователь не авторизован, возвращаем ошибку 401
    }
    const { text } = ctx.request.body; // Получаем текст статьи из тела запроса
    const article = await strapi.services.article.create({ text, user: user.id }); // Создаем новую статью, связанную с пользователем
    return sanitizeEntity(article, { model: strapi.models.article }); // Возвращаем новую статью
  },
};







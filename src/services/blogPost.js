const { BlogPost, Category } = require('../database/models');
const status = require('../status');

const create = async (title, content, userId, categoryIds) => {
const result = await Category.findAll({
    where: { id: categoryIds },
});

if (!result.length) throw status.categorysIdsNotFound;

const createBlogPost = await BlogPost.create({ title, content, userId });
await createBlogPost.addCategory(result);
return createBlogPost;
};

module.exports = {
    create,
};

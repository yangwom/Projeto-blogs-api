const { BlogPost, Category } = require('../database/models');
const status = require('../status');

const create = async (title, content, userId, categoryIds) => {
const categoryid = await Category.findAll({
    where: { id: categoryIds },
});

if (categoryid.length !== categoryIds.length) throw status.categorysIdsNotFound;

const createBlogPost = await BlogPost.create({ title, content, userId });
createBlogPost.addCategories(categoryid);
return createBlogPost;
};

module.exports = {
    create,
};

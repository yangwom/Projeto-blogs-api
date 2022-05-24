const { blogPost, PostCategory } = require('../database/models');
const status = require('../status');

const create = async (title, content, categoryIds) => {
const categoryid = await PostCategory.findAll({
    where: { id: categoryIds },
});

if (!categoryid) throw status.categorysIdsNotFound;

const createBlogPost = await blogPost.create({ title, content, categoryIds });

return createBlogPost;
};

module.exports = {
    create,
};

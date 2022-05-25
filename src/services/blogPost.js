const { BlogPost, Category, User } = require('../database/models');
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

const getAll = async () => {
const data = await BlogPost.findAll({
    include: 
    [{ model: User, as: 'user', attributes: { exclude: 'password' } },
     { model: Category, as: 'categories', through: { attributes: [] } },
    ],
});
return data;
};

module.exports = {
    create,
    getAll,
};

const Sequelize = require('sequelize');
const { BlogPost, Category, User } = require('../database/models');
const config = require('../database/config/config');
const status = require('../status');

const sequelize = new Sequelize(config.development);

const create = async (title, content, userId, categoryIds) => {
        const t = await sequelize.transaction();

        try {
            const createBlogPost = await BlogPost
            
            .create({ title, content, userId }, { transaction: t });
            
            await createBlogPost.addCategories(categoryIds, { transaction: t });

            await t.commit();
            
            return createBlogPost;
        } catch (err) {
           await t.rollback();
           
            throw status.categorysIdsNotFound;
        }
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

const getById = async (id) => {
const data = await BlogPost.findByPk(id, {
    include: 
    [{ model: User, as: 'user', attributes: { exclude: 'password' } },
     { model: Category, as: 'categories', through: { attributes: [] } },
    ],
});

if (!data) throw status.postNotFound;

return data;
};

const update = async (id) => {
const data = await BlogPost.findByPk(id, {
    include: 
    [{ model: User, as: 'user', attributes: { exclude: 'password' } },
     { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
  if (!data) throw status.postNotFound;

return data;
};

module.exports = {
    create,
    getAll,
    getById,
    update,
};

const status = require('../status');

const blogPost = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;
  
    if (!title || !content || !categoryIds) return next(status.requiredField);
  
    next();
  };
  
  module.exports = blogPost;
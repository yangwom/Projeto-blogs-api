const status = require('../status');

const postMiddleware = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;
  
    if (!title || !content || !categoryIds) return next(status.requiredField);
  
    next();
  };

  const postPut = async (req, res, next) => {
    const { title, content } = req.body;

    if (!title || !content) return next(status.requiredField);
    next();
  };
  
  module.exports = {
    postPut,
    postMiddleware,
  };
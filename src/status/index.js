const success = 200;
const created = 201;
const noContent = 204;
const notFound = 404;
const badRequest = 400;
const conflict = 409;
const Unprocessa = 422;
const internalServerError = 500;
const productNotFound = { status: notFound, message: 'Product not found' };
const saleNotFound = { status: notFound, message: 'Sale not found' };
const errorConflict = { status: conflict, message: 'Product already exists' };

module.exports = {
success,
notFound,
badRequest,
internalServerError,
productNotFound,
saleNotFound,
Unprocessa,
errorConflict,
created,
noContent,
};                                   
const success = 200;
const created = 201;
const noContent = 204;
const notFound = 404;
const badRequest = 400;
const conflict = 409;
const Unprocessa = 422;
const internalServerError = 500;
const requiredField = { status: badRequest, message: 'Some required fields are missing' };
const ivalidField = { status: badRequest, message: 'Invalid fields' };

const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };

module.exports = {
success,
notFound,
badRequest,
internalServerError,
Unprocessa,
created,
noContent,
conflict,
requiredField,
ivalidField,
jwtConfig,
};                                   
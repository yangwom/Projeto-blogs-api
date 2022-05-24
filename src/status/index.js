const success = 200;
const created = 201;
const noContent = 204;
const notFound = 404;
const badRequest = 400;
const unauthorized = 401;
const conflict = 409;
const Unprocessa = 422;
const internalServerError = 500;
const requiredField = { status: badRequest, message: 'Some required fields are missing' };
const ivalidField = { status: badRequest, message: 'Invalid fields' };
const displayNameLength = {
     status: badRequest, 
     message: '"displayName" length must be at least 8 characters long' };
const emailNotValid = { status: badRequest, message: '"email" must be a valid email' };
const passwordLength = { 
    status: badRequest, 
    message: '"password" length must be at least 6 characters long' };
const errorConflict = { status: conflict, message: 'User already registered' };

const tokenNotValid = { status: unauthorized, message: 'Token not found' };
const tokenExpiresIn = { status: unauthorized, message: 'Expired or invalid token' };
const userNotFound = { status: notFound, message: 'User does not exist' };
const nameRequired = { status: badRequest, message: '"name" is required' };
const categorysIdsNotFound = { status: notFound, message: '"categoryIds" not found' };
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
displayNameLength,
emailNotValid,
passwordLength,
errorConflict,
tokenNotValid,
tokenExpiresIn,
userNotFound,
nameRequired,
categorysIdsNotFound,
};                                   
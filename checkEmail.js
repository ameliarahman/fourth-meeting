const emailValidator = require('email-validator')

const checkEmailArrow = (email) => emailValidator.validate(email);

function checkEmail(email) {
    return emailValidator.validate(email)
}

module.exports = {
    checkEmail,
    checkEmailArrow
}
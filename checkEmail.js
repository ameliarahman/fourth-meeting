const emailValidator = require('email-validator')

function checkEmail(email) {

    return emailValidator.validate(email)
}

module.exports = checkEmail;
const checkEmail = require('email-validator');

function checkProfile() {
    return {
        name: "Amelia Rahman",
        email: "amel.rahman5@gmail.com",
        checkEmail: checkEmail.validate('amel.rahman5@gmail.com')
    }
}

module.exports = checkProfile;
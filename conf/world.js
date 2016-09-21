var world = (function() {

    var BScredential = require('./credential/browserstack.json'),
        usersCredential = require('./credential/usersCredential.json')


    return {
        BScredential: BScredential,
        usersCredential: usersCredential
    }

}());
module.exports = world;
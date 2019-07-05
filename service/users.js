var { userService } = require('./service');

function login(options) {
    return userService('login', options);
}

function register(options) {
    return userService('register', options);
}

function updatePwd(options) {
    return userService('updatePwd', options);
}

function nickname(options) {
    return userService('nickname', options);
}


module.exports = {
    login,
    register,
    updatePwd,
    nickname
}
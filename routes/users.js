var express = require('express');
var router = express.Router();
var { login, register, updatePwd, nickname } = require('../controller/users');
/**
 * 用户登录
 * post   /
 */
router.post('/', login);

/**
 * 用户注册
 * post     /sign_up
 */
router.post('/sign_up', register);

/**
 * 修改密码
 * patch    /
 */
router.patch('/', updatePwd);

/**
 * 修改昵称
 * patch    /nicknames
 */
router.patch('/nicknames', nickname);

module.exports = router;
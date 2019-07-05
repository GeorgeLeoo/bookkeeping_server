const UserSchema = require('../schema/userSchema');
const utils = require('../utils/utils');
const result = utils.result;

function login(options, resolve, reject) {
    if (!options.tel || !options.pwd) {
        reject(result.errorData('手机号或密码不能为空'));
        return;
    }
    UserSchema.find(options, function (err, doc) {
        _login({ err, doc, resolve, reject });
    })
}

function register(options, resolve, reject) {
    if (!options.tel || !options.pwd) {
        reject(result.errorData('手机号或密码不能为空'));
        return;
    }
    UserSchema.insertMany(options, function (err, doc) {
        _register({ err, doc, resolve, reject })
    });
}

function updatePwd(options, resolve, reject) {
    if (!options.tel || !options.pwd) {
        reject(result.errorData('手机号或密码不能为空'));
        return;
    }
    UserSchema.updateOne({ tel: options.tel }, { $set: { pwd: options.pwd } }, (err, doc) => {
        _updatePwd({ err, doc, resolve, reject })
    })
}

function nickname(options, resolve, reject) {
    if (!options.tel || !options.nickname) {
        reject(result.errorData('查询错误'));
        return;
    }
    UserSchema.updateOne({ tel: options.tel }, { $set: { nickname: options.nickname } }, (err, doc) => {
        _nickname({ err, doc, resolve, reject })
    })
}


function _login({ err, doc, resolve, reject }) {
    if (err) {
        reject(result.errorData());
    } else {
        if (doc.length !== 0) {
            resolve(result.successData(doc, '登录成功'));
        } else {
            reject(result.errorData('登录失败，手机号或密码错误'));
        }
    }
}

function _register({ err, doc, resolve, reject }) {
    if (err) {
        if (err.code === 11000) {
            reject(result.errorData('手机号已存在'));
        } else {
            reject(result.errorData());
        }
    } else {
        resolve(result.successData(doc, '注册成功'));
    }
}

function _updatePwd({ err, doc, resolve, reject }) {
    if (err) {
        reject(result.errorData());
    } else {
        if (doc.nModified === 1) {
            resolve(result.successData({}, '修改密码成功'));
        } else {
            reject(result.errorData('新密码不能和现在的密码相同,请重新设置密码'));
        }
    }
}

function _nickname({ err, doc, resolve, reject }) {
    if (err) {
        reject(result.errorData());
    } else {
        if (doc.nModified === 1) {
            resolve(result.successData({}, '修改昵称成功'));
        } else {
            reject(result.errorData('新昵称不能和现在的昵称相同,请重新设置昵称'));
        }
    }
}

module.exports = {
    login,
    register,
    updatePwd,
    nickname
}

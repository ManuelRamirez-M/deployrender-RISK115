const axios = require('axios');
const db = require('../models');
const User = db.User

const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../.env' });

const signUp = async (ctx) => {
    const authInfo = ctx.request.body;
    let user = await User.findOne({ where: { mail: authInfo.email } })
    if (user) {
        ctx.body = `The user by the email '${authInfo.email}' already exists`;
        ctx.status = 400;
        return;
    }
    try {
        const hashedPassword = await bcrypt.hash(authInfo.password, 10); // BCRYPT
        user = await User.create({
            username: authInfo.username,
            password: hashedPassword,
            mail: authInfo.email
        })
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    ctx.body = {
        username: user.username,
        email: user.mail
    };
    ctx.status = 201;
}

const login = async (ctx) => {
    let user;
    const authInfo = ctx.request.body
    try {
        user = await User.findOne({where:{mail:authInfo.email}});
    }
    catch(error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!user) {
        ctx.body = `The user by the email '${authInfo.email}' was not found`;
        ctx.status = 400;
        return;
    }

    const passwordMatch = await bcrypt.compare(authInfo.password, user.password); // BCRYPT decrypt

    if (passwordMatch) {
        ctx.body = {
            username: user.username,
            email: user.mail,
        };
        ctx.status = 200;
    } else {
        ctx.body = "Incorrect password";
        ctx.status = 400;
        return;
    }
    // Creamos el JWT. Si quisieras agregar distintos scopes, como por ejemplo
    // "admin", podrían hacer un llamado a la base de datos y cambiar el payload
    // en base a eso.
    const expirationSeconds = 1 * 60 * 60 * 24;
    const JWT_PRIVATE_KEY = process.env.JWT_SECRET;
    var token = jwt.sign(
        { scope: ['user'] },
        JWT_PRIVATE_KEY,
        { subject: user.id.toString() },
        { expiresIn: expirationSeconds }
    );
    ctx.body = {
    "access_token": token,
    "token_type": "Bearer",
    "expires_in": expirationSeconds,
    "username": user.username,
    "userId": user.id,
    }
    ctx.status = 200;

}

module.exports = {
    signUp,
    login
  };
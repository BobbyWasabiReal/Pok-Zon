const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { default: userEvent } = require('@testing-library/user-event');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken
};

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error(); ;
        res.json( createJWT(user) );
    } catch {
        res.status(400).json('Bad Credentials');
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user);
    res.json(req.exp);
}

/*---- Helper Functions ----*/

function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}
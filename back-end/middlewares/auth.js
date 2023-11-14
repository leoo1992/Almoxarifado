
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { promisify } = require('util');


module.exports = {
    veryJWT: async function (req, res, next) {
        const headerToken = req.headers.authorization;

        if (err || !headerToken) {
            return res.status(401).end();
        } else {
            const [bearer, token] = headerToken.split(' ');
            if (!bearer && !token) {
                return res.status(401).end();
            }

            try {
                const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
                req.userId = decoded.userId;

                return next();
            } catch (err) {
                return res.status(401).end();
            }
        }
    }

}

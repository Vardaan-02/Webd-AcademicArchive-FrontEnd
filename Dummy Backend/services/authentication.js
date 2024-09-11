const jwt = require("jsonwebtoken");

const secret = "Vardaan@123";

function createTokenForUser(user){
    const payload = {
        id : user.id,
        email : user.email,
    }

    const token = jwt.sign(payload,secret);
    return token;
}
function validateToken(token){
    const payload = jwt.verify(token,secret);
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken,
}
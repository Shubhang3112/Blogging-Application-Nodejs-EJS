const {validateToken} = require("../services/auth");

function checkAuthenticationCookie(tokenName) {
    return (req,res,next) => {
        const tokenCookieValue = req.cookies[tokenName];
        if(!tokenCookieValue) return next();
        try {
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;
        } catch (error) {}
        return next();
    }
}

module.exports = { checkAuthenticationCookie};
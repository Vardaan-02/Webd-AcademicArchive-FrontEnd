function auth(req, res, next) {
  if ( typeof(req.cookies?.token) === "undefined") return res.redirect("/user/login");
  next();
}

module.exports = {
  auth,
};

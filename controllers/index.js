  
const router = require("express").Router();
const api = require("./api.js");


//router.use("/", homeRoutes);
router.use("/api", api);


module.exports = router;
const { Router } = require("express");
const { getDriviers } = require("../controllers/getDrivers");

const router = Router();

router.get('/Drivers',getDriviers);

module.exports = router;

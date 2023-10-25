const { Router } = require("express");
const { getDrivers } = require("../controllers/getDrivers");
const { postDriver } = require("../controllers/postDriver");
const { getTeams } = require("../controllers/getTeams");

const router = Router();

router.get('/drivers',getDrivers);
router.post('/drivers',postDriver);
router.get('/teams',getTeams);

module.exports = router;

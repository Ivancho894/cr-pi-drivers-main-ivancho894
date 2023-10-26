const { Router } = require("express");
const { getDrivers } = require("../controllers/getDrivers");
const { postDriver } = require("../controllers/postDriver");
const { getTeams } = require("../controllers/getTeams");
const { getDriversByName } = require("../controllers/getDriverByName");

const router = Router();

router.get('/drivers',getDrivers);
router.post('/drivers',postDriver);
router.get('/teams',getTeams);
router.get('/drivers/name',getDriversByName)

module.exports = router;

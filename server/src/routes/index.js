const { Router } = require("express");
const { getDrivers } = require("../controllers/getDrivers");
const { postDriver } = require("../controllers/postDriver");
const { getTeams } = require("../controllers/getTeams");
const { getDriversByName } = require("../controllers/getDriverByName");
const { getDriverById} = require("../controllers/getDriverById");

const router = Router();

router.get('/drivers',getDrivers);
router.get('/drivers/:id',getDriverById);
router.post('/drivers',postDriver);
router.get('/teams',getTeams);
router.get('/drivers/name',getDriversByName)

module.exports = router;

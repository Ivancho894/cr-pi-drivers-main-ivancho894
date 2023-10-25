const { Router } = require("express");
const { getDrivers } = require("../controllers/getDrivers");
const { postDriver } = require("../controllers/postDriver");

const router = Router();

router.get('/drivers',getDrivers);
router.post('/drivers',postDriver)

module.exports = router;

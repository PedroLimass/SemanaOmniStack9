const express = require("express");
const multer = require("multer");
const uploadConfig = require("../src/config/update");

const SessionController = require("./Controllers/SessionController");
const SpotController = require("./Controllers/SpotController");
const DashBoradController = require("./Controllers/DashBoradController");
const BookingController = require("./Controllers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);

routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.get("/spots",  SpotController.index);

routes.get("/dashborad",  DashBoradController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);


module.exports = routes;

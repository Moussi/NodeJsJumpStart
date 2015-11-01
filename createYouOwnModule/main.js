var logger = require("./modules/logger");
var Point = require("./modules/point");

logger.info("Instanciate Point object :");
logger.info("Use the print method to show coordiantes")
var pt = new Point(50,60);
pt.print();
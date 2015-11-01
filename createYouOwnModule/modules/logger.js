exports.info = function (msg) {
console.log("[INFO] "+new Date() +" : "+msg);
}
exports.error = function (msg) {
console.log("[ERROR] "+new Date() +" : "+msg);
}
var moment = require('moment-timezone');
var time = moment().tz("America/Los_Angeles").format('LLLL');
console.log(time)
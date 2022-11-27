const os = require('os');
const { uptime } = require('process');

// get system infos
// vars
const user = os.userInfo()
const up = os.uptime()



console.log(user);

// method returns the system uptime in second
console.log("Uptime = "+ up+ " seconds");
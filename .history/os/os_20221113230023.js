const os = require('os');
const { uptime } = require('process');

// get system infos

// get current system user
const user = os.userInfo()

console.log(user);

// method returns the system uptime in second
console.log("Uptime = "+ up+ " seconds");
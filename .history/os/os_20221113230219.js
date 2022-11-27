const os = require('os');
const { uptime } = require('process');

// get system infos
// vars
const user = os.userInfo()
const up = os.uptime()
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

// get user info
console.log(user);

// method returns the system uptime in second
console.log("Uptime = "+ up+ " seconds");

// get the os infos
console.table();
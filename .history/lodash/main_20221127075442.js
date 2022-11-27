
// test of lodash 

const _ = require('lodash')

const items = [1, [2, [3, [4] ]]]
const newItems = _.flattenDeep(items)

console.log("Flatten deep values \n" );
console.log(newItems);

const items2 = [0, 1, "", false,  null]
/**
 * Created by songzhongkun on 2017/7/4.
 */
const _ = require('lodash');

const array = ['a','b','c','d','e'];

const a = _.chunk(array, 3);

console.log(a);
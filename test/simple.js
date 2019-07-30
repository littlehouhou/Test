/**
 * 简单的测试用例
 */
// //引入编写的两个方法
// const {add,mul} = require('../src/math.js');

// if(add(2,3) === 5){
//   console.log('add(2,3)===5,ok');
// }else{
//   console.log('add(2,3) !==5, error');
// }

// /**
//  *nodejs原生的语义化断言工具aasert
//  */
// const {add,mul} = require('../src/math.js');
// const assert = require('assert').strict;

// assert.strictEqual(add(2,3),5);

/**
 * 使用chai断言库
 */
const {add,mul} = require('../src/math.js');
const {should,expect,assert} = require('chai');

//should
should();
add(2,3).should.equal(5);

//expect
expect(add(2,3)).to.equal(5);

//assert
assert.equal(add(2,3),5);
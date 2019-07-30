/**
 * 使用mocha测试框架
 */
const {add,mul,cover} = require('../src/math.js');
const {should,expect,assert} = require('chai');

describe('#math',()=>{
  describe('add',()=>{
    it('should return 5 when 2 + 3',()=>{
      assert.equal(add(2,3),5);
    });
    it('should return -1 when 2 + -3',()=>{
      assert.equal(add(2,-3),-1);
    });
  });
  describe("mul",()=>{
    it('should return 6 when 2 * 3',()=>{
      assert.equal(mul(2,3),6);
    });
  });
  describe("cover",()=>{
    it('should return 6 when 2 * 3',()=>{
      assert.equal(cover(2,3),1);
    });
  });
});
const { test, expect } = require('@jest/globals')
const { add } = require('./jestDemo1')

test('加法测试',()=>{
    expect(add(1,2)).toBe(3)
})
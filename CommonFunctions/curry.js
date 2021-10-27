// 柯里化函数  基本方法是使用一个闭包返回一个函数

// 需求：检测字符串中是否包含空格
let matching = (reg, str) => reg.test(str)
console.log(matching(/\s+/g, 'hello world'))    // true
console.log(matching(/\s+/g, 'abcdefg'))        // false


// 柯里化
let curry = (reg)=>{
    return(str) =>{
        return reg.test(str)
    }
}
let hasSpace = curry(/\s+/g)           // 带上+是表示从第一个字符开始匹配，直到匹配失败为止
console.log(hasSpace('hello world'))    // true
console.log(hasSpace('asbdlkf'))         // false



// loadsh 的curry
const _ = require('loadsh')   //  引入loadsh
const persons = [
    {'name':'Perter', age:21},
    {'name':'Emily', age:28},
    {'name':'Mark', age:18},
    {'name':'Josn', age:56},
    {'name':'Tony', age:15}
]
const getProp = _.curry((key,obj)=>{
    return obj[key]
})
let ages = persons.map(getProp('age'))
console.log('person中每个对象的年龄是：' + ages)
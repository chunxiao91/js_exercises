// 缓存函数

// let memoize = function (func) {
//     let cache = {};         // 把函数每次执行结果都放到一个对象中
//     return function (key) {
//         if(!cache[key]){    // 每次去对象中查找，如果没有 那么求值
//             cache[key] = func.apply(this, arguments)
//         }
//         return cache[key]
//     }
// }

// let add = (a,b) => a+b
// let calculate = memoize(add)

// console.log('第一遍结果：' + calculate(10,20))
// console.log('第二遍结果：' + calculate(10,20)) // 相同的参数 第二次调用时，从缓存中取出数据，而非重新计算一次


// 以下是memoize的具体实现。  增加了hash，hash是用来计算key的
let memoize = function (func, hasher) {
    var memoize = function (key) {
        var cache = memoize.cache
        var address = '' + (hasher ? hasher.apply(this, arguments): key)
        if(!cache[address]) {
            cache[address] = func.apply(this, arguments)
        }
        return cache[address]
    }
    memoize.cache = {}
    return memoize
}

// 斐波那契数列 这个数列从第3项开始，每一项都等于前两项之和： 0 1 1 2 3 5 8 13 
let count = 0
let fibonacci = (n) => {
    count++;
    return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2)
}

// 使用缓存函数memoize
fibonacci = memoize(fibonacci)
for(var i=0;i<=10;i++){
    fibonacci(i)
}
console.log('斐波那契数列的计算次数是' + count)    // 12

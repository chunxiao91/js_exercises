// 得到一个数先加10  在乘以10的结果


// 普通的命令式编程
let calculate = x => (x + 10) * 10
console.log ('命令式编程：'+calculate(5))


// 函数式编程 拆成两个简单函数
const add = num => num + 10
const multiply = num => num *10
console.log( '函数式编程：'+multiply((add(5)))) 


// compose  思考将两个函数合成一个函数
// 思路：两个函数都有共同参数， 执行顺序是从右到左执行，前边的结果交给后边处理。
const compose = (f, g) =>{
    return function (x){
        return f(g(x))
    }
}
const calculate2 = compose(multiply,add)
console.log('compose函数执行结果：' + calculate2(5)) 


// 实现通用的  compose函数
const compose2 = function () {   
    let args = [].slice.call(arguments)      // 将我们传入的函数当做参数收集起来. 这里将arguments转化为数组收集起来
    return function(x){                      // 上一个函数的处理结果需要当做参数传递给下一个，因此可以使用reduce实现。
        args.reduceRight(function(res,cb){   // reduce方法可以接受一个函数做为累加器。reduce会将数组中的每一个元素依次执行传入函数   
            return cb(res)                   // 复合函数 compose的执行顺序是从有往左执行，但是reduce是从左往右累加， reduceRight是从右往左累加
        },x)                                 // 从x开始计算，将res的值传递给cb做参数
    }
}
const calculate3 = compose2(multiply,add)     // 同样是个闭包
console.log('compose函数执行结果：' + calculate3(5))


// ES6写法
const compose = (...args) => x => args.reduceRight((res,cb) => cb(res), x)


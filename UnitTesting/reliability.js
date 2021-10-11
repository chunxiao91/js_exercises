// 一、 提高代码的可靠性-函数式编程

// 以下是初级写法 命令式编程
let arr1 = [1,2,3,4,5]
let newArr1 = []

for(let i =0 ;i<arr1.length; i++){
    newArr1.push (arr1[i]+1)
    console.log('命令式编程 数组增加：' + newArr1[i])
}

// 用函数式编程写,可重复使用
let arr2 = [1,2,3,4,5,6,7]
let newArr2 = (arr,fn)=> {
    let res = []
    for(let i=0; i<arr.length; i++){
        res.push(fn(arr[i]))
    }
    return res
}
let add = item =>item + 1
let sum = newArr2(arr2, add)
console.log('函数式编程 数组增加：' +sum)



// 二、减少函数的副作用

// 以下是不纯的函数: 相同的参数但是输出结果不一定相同
const foo1 = (something) =>{
    const dt = new Date().toISOString();
    console.log(`${dt}:${something}`)
    return something
}
foo1('hello')

// 减少函数副作用 依赖注入
const foo2 = (d, something) =>{
    const dt = d.toISOString()
    console.log(`${dt}:${something}`)
    
}
const d = new Date()
const info = 'hello'
foo2(d, info)



// 三、减少可变性

// 可变的
let data = { count:1 }
let fun1 = (d) => {
    d.count = 3;
}
console.log('fun1函数调用之前的datacount:' + data.count) // 1

fun1(data)
console.log('fun1 函数调用之后datacount:' + data.count)  // 3

// 利用解构赋值完成深拷贝 实现 不可变行
let data2 = { count:1}
let fun2 = (d) => {
    // 深拷贝
    let l = {...d}
    l.count = 3
}
console.log('fun2函数调用之前的datacount:' + data2.count) // 1

fun2(data2)
console.log('fun2函数调用之后datacount:' + data2.count)  // 1

// 利用 json 完成深拷贝 实现不可变性
let data3 = { count:1 }
let fun3 = ( d ) => {
    let li = JSON.parse(JSON.stringify(d))
    li.count = 3
}
console.log('fun3函数调用之前的datacount:' + data3.count)
fun3(data3)
console.log('fun3函数调用之前的datacount:'+ data3.count)
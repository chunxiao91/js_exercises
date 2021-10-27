// 高阶函数：flat

// 把数组拉平，默认拉平一层

let arr = [1,2,3,4,[5,6]]
let newArr = arr.flat()
console.log(newArr)   // [ 1, 2, 3, 4, 5, 6 ]


// 拉平3层
let arr2 = [1,2,3,4,[5,6,[7,8]]]
let newArr2 = arr.flat(3)
console.log(newArr2)    // [ 1, 2, 3, 4, 5, 6 ]


// 不知道有多少层的时候 用infinity关键字
let arr3 = [1,2,3,4,[5,6,[7,8,[9,10]]]]
let newArr3 = arr3.flat(Infinity)
console.log(newArr3)     // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// 偏函数 （部分应用）

// 使用bind实现
let add = (x,y) => x+y

let rst = add.bind(null,1)
console.log(rst(2))
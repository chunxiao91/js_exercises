// 
// 以下是初级写法 命令式编程
let arr1 = [1,2,3,4,5]
let newArr1 = []

for(let i =0 ;i<arr1.length; i++){
    newArr1.push = arr1[i]+1
    console.log(newArr1[i])
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
console.log(sum)


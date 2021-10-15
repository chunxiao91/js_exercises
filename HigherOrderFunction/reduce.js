// 数组求和
let arr = [1,2,3,4,5]
let sum = arr.reduce((perv,cur)=>{
    return perv + cur
},0) 

console.log(sum)

// 数组去重
let arr2 = [1,1,1,1,1,2,2,5,6,5,5,5,9]
let newArr = arr2.reduce((perv,cur)=>{
    if(perv.indexOf(cur) === -1){
        perv.push(cur)
    }
    return perv
},[])
console.log(newArr)
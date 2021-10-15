// 需求：创建一个新的数组，其中的值是原数组值的两倍
const arr1 = [5,6,7,8,9]
const arr2 = []
// const arr5 = [{key1:11},{key2:22}]
// 普通函数常规做法
for(let i =0; i< arr1.length; i++){
    arr2.push(arr1[i]*2)
}
console.log(arr2)

// 使用map函数
const arr3 = arr1.map(function(item, index, arr){
    console.log('当前元素:' + item)
    console.log('当前元素索引：' + index)
    console.log('当前元素所属的数组对象：' + arr)
    return item * 2
})
console.log(arr3)

// 使用map 与箭头函数
const arr4 = arr1.map(item=>item*2)
console.log(arr4)

// 高阶函数：filter

// 将对象数组中年龄大于25周岁的 对象输出
let persons = [
    {'name':'Perter', age:21},
    {'name':'Emily', age:28},
    {'name':'Mark', age:18},
    {'name':'Josn', age:56},
    {'name':'Tony', age:15}
]
let newAge = persons.filter(
    item => item.age >25
)
console.log(newAge)

// 结果:[ { name: 'Emily', age: 28 }, { name: 'Josn', age: 56 } ]

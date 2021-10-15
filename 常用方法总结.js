// 判断对象是否为一个数组
let a = []
console.log("判断对象是否是数组instanceof：" + (a instanceof Array))
console.log('判断对象是否是数组constructor：' + (a.constructor===Array) )
console.log('判断对象是否是数组isArray：' + Array.isArray(a) )


// 判断对象中是否有值为空的属性，如果有则输出key值
let obj = {a:123, b:""}
for(key in obj){
    if(!obj[key]){
        console.log('对象中这个key的值为空：' + key)
    }
}


// 对于多层不规则对象的遍历，这里用递归。 考虑三种情况，如果为空，如果是对象，如果到底层了
let data= {
    a: { one: 1, two: 2, three: {four:'4',five:'5'} },
    b: { six: 6, seven: 7, eight: 8 },
    c: { nine: 9, ten: 10}
}
console.log('--------不规则对象的遍历--------')
let traverse = (data) =>{
    console.log('--s--')
    for(key in data){
        if(!data[key]){
            return 
        }
        else if(typeof(data[key])=="object"){
            traverse(data[key])
        } else{
            console.log(key + ":" + data[key])
        }
    }
    console.log('--e--')
}
console.log('--------End---------')
traverse(data)


// 通过身份证号获取出生年月日
const idCard = /(^\d{15}$)|(^\d{18}$)|( ^\d{17}(\d|X|x))$ /; // 验证身份证号的正则表达
let getBirthdayFromIdCard  = (idNum)=>{
    let birthday= ''
    if(idCard.test(idNum)){
        if(idNum.length === 15){

            birthday = '19' + idNum.substr(6,8)
        } else if(idNum.length === 18){
            birthday = idNum.substr(6,8)
        }
        // 变为日期格式
        // let m = moment(birthday)
        // if(moment.isMoment(m)){
        //     birthday = m.format('YYYY/MM/DD')
        // } else{
        //     birthday = ''
        // }
    }
console.log('生日是：' + birthday )    
//  return birthday
}
getBirthdayFromIdCard('371121199505250036')


// 合并有序数组
let nums1 = [1,2,3,0,0,0]
let nums2 = [2,2,5]
let myMerge = (arr1, arr2) => {
    let arr = arr1.concat(arr2)
    arr.sort((a,b)=> a-b)
    console.log('myMerge:'+ arr)
}
myMerge(nums1,nums2)

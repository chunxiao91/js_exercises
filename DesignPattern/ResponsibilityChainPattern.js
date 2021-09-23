// 写一个高扩展性的表单验证，现在无法确定要验证什么，以后可能会有多种验证方法加进去
// 比如检测是不是数字，是不是电话号码
// 利用职责链模式


// 验证队列 -- 职责链
function inputTest() {
    this.testList = []
}

// 通过api来加入新的验证 可以通过接口来扩展
inputTest.prototype.addTest = function (fn) {
    this.testList.push(fn)
}

//如何执行这个职责链
inputTest.prototype.test = function(fn) {
    // 验证可能是同步验证也可能是异步验证（验证某个号码是否存在）
    // 但是简单的使用forEach来做的话，不能保证队列中的所有的验证顺序执行。
    // 为了保证有顺序的执行，应该使用promise 或者是async来执行
    var self = this;

    async function runList(value) {
        // 会依次的执行数组中的每一个
        var _resultList = []  // 在执行过程中有消息、结果传递出来,这里是存值的
        for(var i=0; i<self.testList.length; i++){
            var _result = await self.testList[i](value);
            _resultList.push(_result)
        }
        return _resultList  // 虽然返回了一个数组 ，但是asycn最终都会包装成一个promise
    }

    // 所以这里不能像这样直接拿到这个数组  var aa = runList(value) 是不对的
    // 要用then函数去拿到结果
    runList(value).then( 
        (res)=>{
            console.log(res)
        }
    )
}

// 使用 与 拓展

// 添加一个实例
var inputTester = new inputTest()

inputTester.addTest(() => {
    // 验证是否是一个电话号码
    // ......
    // 把验证结果return出去
    return{
        pass:false,
        result:'电话号码不符合规范',
    }
})
// 执行验证
inputTester.test(1232555)

// 假如后期又提新的需求，就可以不改动源代码，用addTest添加新验证
// 验证电话号码是否存在
inputTester.addTest(
    ()=>{
        // 新的操作是一个异步操作  所以需要返回一个promise
        // 异步操作必须包在promise里边, await 必须是一个promise
        return new Promise(
            (resolve,reject)=>{
                // 这里用setTimeout模仿像后端发请求
                setTimeout(
                    ()=>{
                        resolve({
                            pass:'false',
                            result:'电话号码已存在'
                        })
                    }
                , 1000)            
            }
        )
    }
)


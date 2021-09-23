// 单例模式

function single(){
    // 以后每次实例化之前先判断一下这个标识
    // 如果之前已经实例化过了，那我们把上一次实例化的对象拿过来
    if( single.instance){
        return single.instance
    } else {
        // 如果还没有被实例化过 那么就可以继续实例化
        this.a = 123
        this.b = 456
        // 实例化完之后把标识改为这个对象
        single.instance = this
    } 
}

// 加一个标识
single.instance = false

// new single 后边实例化对象拿到的永远是第一次创建的那个对象

// 单例模式的写法并不是固定的，也可以保证一个方法只被调用一次
 
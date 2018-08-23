# 箭头函数需要注意的地方

> this指向是固定的，指向定义时所在的对象

> argument 不能使用

> 不能用new操作符

> yield不能使用

# 讲一下let 和const

> let是var的提升版，它定义的函数只能在{}，以及局部对象发生变量提升

> const 新增的用于定义常量值，只能赋一次值

#  Set和Map是什么?

> 他们是新定义的构造函数，用于存储数据

> Set 类似于数组的形式
 - set.add() 添加值
 - set.delete 删除值
 - set.clear() 清除所有值
 - set.size 长度
 - set.has 判断是否含值

``` js
let mySet = new Set();

mySet.add(1); // Set(1) {1}
mySet.add(5); // Set(2) {1, 5}
mySet.add(5); // Set { 1, 5 }
mySet.add("some text"); // Set(3) {1, 5, "some text"}
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o 指向的是不同的对象，所以没问题

mySet.has(1); // true
mySet.has(3); // false
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5);  // true,  从set中移除5
mySet.has(5);     // false, 5已经被移除

mySet.size; // 4, 刚刚移除一个值
console.log(mySet); // Set {1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2}}
```

> Map是键值对的形式存在的

 - m.set(key,value)
 - m.get(key)
 - m.has(key)
 - m.delete(key)
 - m.clear()

 ``` js
var myMap = new Map();
 
var keyObj = {},
    keyFunc = function () {},
    keyString = "a string";
 
// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");
 
myMap.size; // 3
 
// 读取值
myMap.get(keyString);    // "和键'a string'关联的值"
myMap.get(keyObj);       // "和键keyObj关联的值"
myMap.get(keyFunc);      // "和键keyFunc关联的值"
 
myMap.get("a string");   // "和键'a string'关联的值"
                         // 因为keyString === 'a string'
myMap.get({});           // undefined, 因为keyObj !== {}
myMap.get(function() {}) // undefined, 因为keyFunc !== function () {}
 ```

# Class的讲解

 - 可以通过construst传递参数
 - 可以通过new 操作符创建实例
 - 可以通过extend 继承类
 - 类的构造函数必须含有super函数,才能继承父元素

``` js

class Sup {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

     sayHello() {
        console.log(this.name+'说你好！')
    }
}

let s = new Sup('ly',18)

s.sayHello();

class Sub extends Sup {
    constructor(name,age,sex){
        super(name,age)
        this.sex = sex;
    }
    sayAll(){
        console.log(`${this.name},今年${this.age},${this.sex}`)
    }
}

let b = new Sub('ly',18,'男');

b.sayAll()

```

## 模板字符串

> 常用的及时反斜杠，通过${}，来传递变量

``` js
let [name,age,sex] = ['ly',18,'男']

console.log(`${name},今年${age},性别${sex}`)
```

## Promise 干嘛的

> 主要是通过promise来实现异步编程，通过 new promise返回一个promise对象，构造函数可以允许一个匿名函数，里面可以传两个参数，resolve函数代表成功，reject代表失败，promise对象返回的实例可以通过then来进行链式回调，里面接受一个成功的匿名函数，一个失败的匿名函数

## 

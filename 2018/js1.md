# JavaScript基础数据类型

> 基本类型 :null undefined string blooean number

> 引用类型: object

> 新增类型: Symbol

``` js

console.log(typeof(null))
console.log(typeof(undefined))
console.log(typeof('12'))
console.log(typeof(false))
console.log(typeof(Array))
console.log(typeof(RegExp))
console.log(typeof(RegExp))
console.log(typeof(Symbol()))

// object
// undefined
// string
// boolean
// object
// function
// function
// symbol
null是作为object的一个占位符，但它然是引用值
```
# 谈一谈JavaScript作用域链
> 当js开始执行的时候，执行全局代码或者函数时，会创建一个作用域成为上下文，当执行到全局代码时，会创建一个全局作用域，执行到函数时，会创建一个局部的作用域，函数里面如果又有函数又会创建一个局部作用域，它们之间的关系是包含的关系，从而形成了一个单向的作用域链，每个作用域都有相应的作用域链，作用域的头是全局作用域，尾部是局部作用域

> 作用域链的作用是用来解析标识符，当函数被创建时，this，arguments，函数的变量都会存在于这个作用域链上，当我们寻找一个变量时，首先从需要这个变量的位置开始往上查找，顺着作用域向头部查找，如果在全局变量都没找到，就会报引用错误

# 如何理解JavaScript原型链

> 在js中，每个函数都会有一个prototype属性值，它指向一个原型对象，当函数作为构造函数，通过new创建一个实例对象时，这个实例对象有一个__proto__属性，这个属性指向构造函数的原型对象，每个原型对象也有一个__proto__属性，这个属性指向Object的原型对象，于是形成了一个原型链，当实例对象不存在属性和方法时，它会沿着原型链向上查找，直到找到，对于Object的原型对象，他也有__proto__不过它指向一个null，也就是说原型链的最顶端是null，__proto__是连接实例对象与构造函数原型之间的桥梁，与构造函数无关

# JavaScript变量提升

> 在js中，存在变量提升的情况，js引擎会将函数声明和变量声明，提升到当前作用域的顶端，所以我们才可以在函数之前使用变量，对于未用var声明的变量，一般会提升到全局作用域的顶端

# 如何理解和应用JavaScript闭包

> 闭包就是可以访问其他函数局部变量的函数，通常在一个函数局部被定义，由于闭包的存在，函数在执行完也不会被立即销毁，他会存在于内存中，直到闭包被销毁，这样创建大量的闭包就会造成内存的泄露我们必须谨慎使用

> 模拟类的私有属性

# new构建对象的本质

> 首先它会创建一个object对象 obj

> 构造函数的prototype对象指向 obj.__proto__

> 改变函数的this指针

```js

function BaseFn(){}

let instance = new BaseFn();

//模拟操作符new

let obj = new Object();

obj.__proto__ = BaseFn.prototype

BaseFn.call(obj)
```

#  JavaScript事件代理

> js的事件代理主要是通过冒泡实现的，就拿ul li来举例，我们在ul绑定了事件，当点击具体的li元素时，会通过冒泡触发ul的事件，我们可以通过target来确认是哪个li被触发，从而进行操作，这样可以实现动态绑定，同时对性能也有优化，减少了多个绑定造成性能下降的问题，DOM操作是十分消耗性能的。所以重复的事件绑定简直是性能杀手。而事件代理的核心思想，就是通过尽量少的绑定，去监听尽量多的事件。

# 如何进行性能优化

> 对于html

 - 减少不必要的dom节点
 - 尽量闭合标签
 - css放在头部，js放在body上
 - 不要使用@import要使用css引入

> 对于css
 - 不要expressions表达式
 - 减少元素的层级和范围查询
 - 删除重复的css

> js
 - 减少dom操作
 - 减少使用 eval function对象 以及在定时器使用字符串
 - 减少作用域查询，对变量元素进行缓存
 - 避免大量的循环
 - 尽量少绑定元素，多监听事件  事件代理
 - 减少对象查询

>工程化
 - 对css和js以及图片进行压缩
 - 使用模块化开发
 - 对js进行懒加载
 - 合并js和css减少http请求
 - 开启gzip压缩
 - 合理使用缓存












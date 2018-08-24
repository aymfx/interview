# js核心与浏览器机制

## 闭包特性

> 闭包就是可以访问其他函数变量的函数，它的特性是 持久性，一般函数执行完会立即销毁，对于闭包来说外部函数调用完，函数也不会销毁，除非闭包被销毁，封闭性，外面的函数无法访问闭包所在函数的变量，闭包自己可以。

## 作用域链

> js有全局作用域和局部作用域，它定义了变量和函数是否有权访问其他数据，代码执行过程中会创建一个作用域链，作用域链为变量和函数有序访问提供了保证，作用域链的前端就是要执行的代码，如果标识符在当前的作用域不存在，就会沿着作用域链一级一级往上找，知道作用域链的顶端，全局对象为止，找到返回值，没找到报undefined

## 内存泄露
 - 闭包
 - dom被删除或清空后事件触发后没有及时清除
 -  没用var操作符导致升级为全局变量

## 垃圾回收机制

 - 引用计数 : 如果一个对象被其他对象引用就加一，反之就减一，最后为0就被清除
 - 标记清除 : 当一个变量进入环境后他就会被标记，当它离开了环境就会标记会被清除，垃圾处理器就会回收

## 原型链

> 每个构造函数都会有一个prototype属性，它指向的是它的一个原型对象，这个原型对象可以存共享的属性和方法，原型对象有一个constructor属性指向这个构造函数，创建实例的时候，实例有一个__proto__属性指向原型对象，它是构造函数原型对象和实例之间的桥梁，它可以访问构造函数原型对象的函数和方法，而构造函数的原型对象也有__proto__指向上一层的原型对象，直到指向了Object的原型对象为止，因为它的上一层是null

## 继承

 - 原型链继承
 - call()或者apply()继承

## 事件代理
 - 事件代理就是通过冒泡的方式让父元素代理子元素的事件，达到优化性能和提高扩展性的目的

## 事件冒泡（点透)怎么处理

 - A 和 B不是后代继承关系(如果是后代继承关系的话，就直接是冒泡子类的话题了)
 - A发生touch， A touch后立即消失， B事件绑定click
 - A z-index大于B，即A显示在B浮层之上

## this的指向
 - this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，实际上this的最终指向的是那个调用它的对象
 - 定义函数时this指向window
 - 事件处理函数的this指向它所发生的事件对象
 - 在对象中的this指向的是它所在的对象

## 浏览器的事件处理机制
 - js的运行是单线程的，单线程即一个时间只能做一件事。浏览器的运行是多线程的。
 - 如下三种情况会进入事件队列（任务队列）中，但不立即执行：

    - 定时器
    - 事件的函数
    - ajax请求
 - 队列的执行条件 （主线程）
    - 定时器添加到队列开始计时，超时优先执行
    - 事件函数要等特定事件触发再执行
    - ajax要等结果返回再执行

## 浏览器的渲染机制

 - 首先当用户输入一个URL的时候，浏览器就会发送一个请求，请求URL对应的资源
 - 然后浏览器的HTML解析器会将这个文件解析，并且构建成一棵DOM树。
 - 在构建DOM树的时候，遇到JS和CSS元素，HTML解析器就换将控制权转让给JS解析器或者是CSS解析器。
 - JS解析器或者是CSS解析器解析完这个元素时候，HTML又继续解析下个元素，直到整棵DOM树构建完成。
 - DOM树构建完之后，浏览器把DOM树中的一些不可视元素去掉，然后与CSSOM合成一棵render树。
 - 接着浏览器根据这棵render树，计算出各个节点(元素)在屏幕的位置。这个过程叫做layout，输出的是一棵layout树。
 - 最后浏览器根据这棵layout树，将页面渲染到屏幕上去

  - 

 ## 浏览器缓存

  - https://segmentfault.com/a/1190000008377508?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly


## 模块化 

>ES6的模块化的基本规则或特点
 - 每一个模块只加载一次， 每一个JS只执行一次， 如果下次再去加载同目录下同文件，直接从内存中读取。 一个模块就是一个单例，或者说就是一个对象；
 - 每一个模块内声明的变量都是局部变量， 不会污染全局作用域；
 - 模块内部的变量或者函数可以通过export导出；
 - 一个模块可以导入别的模块
## 类

- 类是通过class继承的
- 类可以有静态方法
- 可以定义私有变量和共有变量
- 通过一个构造器来传递参数
- 可以用extends继承

## 块级作用域

- 通过let和const声明的变量只能在自己所在的块级作用域使用，使用后就会被销毁，会计作用域一般由花括号创建，他们没有变量提升的概念，所以在声明之前使用变量会报错，也就是临时死区

## promise

>es6新增的用于异步编程的方式，通过 pending resolve reject判断异步操作是否完成了

## es6新增数组的api有哪些

> Array.of() 将将一组值，转换为数组。

> Array.from() 将类数组转换成数组

> Array.isArray() 判断是不是数组

> 扩展运算符 将数组转换成参数序列

> array.keys() array.values() array.entrys() 获取键值对的

> array.fill()填充数组

## es6 对象新增的属性

 - Object.is()
 >ES5 比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0。JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等
  - Object.assign()
 > Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
  - super 关键字 用于对象的继承
 > Object.keys() Object.values() Object.entrys() 获取键值对的

 - 对象的结构赋值

 ## 五大布局方式 

 - https://blog.csdn.net/wangchengiii/article/details/77926868

 ## webpack配置与npm的玩法

 - webpack是收把项目当作一个整体，通过一个给定的的主文件，webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包成一个或多个浏览器可识别的js文件
 - code splitting(可以自动完成)
 - loader 可以处理各种类型的静态文件，并且支持串联操作。
 - gulp 可以优化amd规范的项目

## 性能优化
 - 减少http请求（对文件进行缓存）
 - cssjs的合并压缩
 - 图片压缩以及整合
 - css应该放在headr，js应该放在body
 - 减少使用eval Function
 - 减少dom查询

## seo
 - 页面一般要做到语义化
 - meta标签要利用好
 - 优化网站分级结构

## 混合开发
 - https://www.cnblogs.com/sanchang/tag/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%9C%BA%E5%88%B6/

## mvc/mvvm
 - 

##  ssr 和中间层

 - 服务器端渲染（SSR）：就是服务器端和前端共用同一个应用，然后通过构建工具及配置，确定哪些组件需要在服务器端渲染，哪些组件需要在客户端渲染；
 - node 中间层：保留服务器端模板渲染的功能，但是由 node 程序来代替以往的后端语言进行模板渲染（毕竟前端更懂前端），后端语言与 node 程序只做数据交互。

## 状态码（200,304,404）
 - 200 请求成功的状态
 - 304 未修改） 自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。 
 - 304 页面未找到状态
 - 503 – 服务器超时
 - 500 内部错误
 - 403   服务器拒绝请求。 
 - 301   （永久移动）  请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。
 - 307   （临时重定向）  服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。

## ajax方式与跨域

- 通过jsonp跨域
- 通过修改document.domain来跨子域
- CORS请求
- 反向代理

## 原生ajax的缺陷与fetch的三大缺陷
 - AJAX干掉了Back和History功能，即对浏览器机制的破坏
 - 浏览器不兼容
 - 调试麻烦

 - 1）fetchtch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理
 - 2）fetch默认不会带cookie，需要添加配置项
 - 3）fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了量的浪费
 - 4）fetch没有办法原生监测请求的进度，而XHR可以

## git命令
 - git init
 - git add
 - git commit -m  'asdasd'
 - git push origin
 - git checkout 切换分支

## 网络安全（防攻击）！
 - xxs 跨站脚本攻击
 - 跨站请求伪造,也被称为“One Click Attack”或者Session Riding,通常缩写为CSRF或者XSRF,是一种对网站的恶意利用。

## token
 - 我对token的概念其实是很模糊的，大概知道为了防止CSRF的攻击，服务器创建session时会随机生成一个token值，存入session中，然后网页前端请求的时候会附带token信息，服务器会做匹配
 - jwt 用户的状态在服务端的内存中是不存储的，所以这是一种无状态的认证机制

## socket
 - 网络上的两个程序通过一个双向的通信连接实现数据的交换,这个连接的一端称为一个socket

 ## react有哪几个生命周期？（8个）

一、初始化阶段

 - 1、设置组件的默认属性

``` js
static defaultProps = { name: 'sls', age:23 }; //or Counter.defaltProps={name:'sls'}
```

 - 2、设置组件的初始化状态
``` js
constructor() { super(); this.state = {number: 0} }
```

- 3、componentWillMount()

>组件即将被渲染到页面之前触发，此时可以进行开启定时器、向服务器发送请求等操作

 - 4、render()

> 组件渲染

 - 5、componentDidMount()

> 组件已经被渲染到页面中后触发：此时页面中有了真正的DOM的元素，可以进行DOM相关的操作

二、运行中阶段

-  1、componentWillReceiveProps()

> 组件接收到属性时触发

 - 2、shouldComponentUpdate()

> 当组件接收到新属性，或者组件的状态发生改变时触发。组件首次渲染时并不会触发

>shouldComponentUpdate(newProps, newState) { if (newProps.number < 5) return true; return false } //该钩子函数可以接收到两个参数，新的属性和状态，返回true/false来控制组件是否需要更新。

>一般我们通过该函数来优化性能：

>一个React项目需要更新一个小组件时，很可能需要父组件更新自己的状态。而一个父组件的重新更新会造成它旗下所有的子组件重新执行render()方法，形成新的虚拟DOM，再用diff算法对新旧虚拟DOM进行结构和属性的比较，决定组件是否需要重新渲染无疑这样的操作会造成很多的性能浪费，所以我们开发者可以根据项目的业务逻辑，在shouldComponentUpdate()中加入条件判断，从而优化性能

>例如React中的就提供了一个PureComponent的类，当我们的组件继承于它时，组件更新时就会默认先比较新旧属性和状态，从而决定组件是否更新。值得注意的是，PureComponent进行的是浅比较，所以组件状态或属性改变时，都需要返回一个新的对象或数组

 - 3、componentWillUpdate()

>组件即将被更新时触发

 - 4、componentDidUpdate()

> 组件被更新完成后触发。页面中产生了新的DOM的元素，可以进行DOM操作

三、销毁阶段

 componentWillUnmount()

> 组件被销毁时触发。这里我们可以进行一些清理操作，例如清理定时器，取消Redux的订阅事件等等。

## 在哪个生命周期做优化？

 - 一个React项目需要更新一个小组件时，很可能需要父组件更新自己的状态。而一个父组件的重新更新会造成它旗下所有的子组件重新执行render()方法，形成新的虚拟DOM，再用diff算法对新旧虚拟DOM进行结构和属性的比较，决定组件是否需要重新渲染无疑这样的操作会造成很多的性能浪费，所以我们开发者可以根据项目的业务逻辑，在shouldComponentUpdate()中加入条件判断，从而优化性能

 
## react怎么从虚拟dom中拿出真实dom
 - ref实现的

## react的diff算法是怎么完成的？
 - 因为组件并不是真实存在dom节点,它只是一个虚拟的数据结构，所以叫虚拟dom，根据react规定一切dom操作首先会在虚拟dom上操作，然后才会被插入到真实的dom，这一切的变动都要依赖diff算法，通过它的比较来决定是否变动dom树的节点，这样可以极大的提高性能

## React中的props和state的用法
 - props:props是一种父级向子级传递数据的方式。父、子组件只能通过props来传递数据。
 - state是React组件的一个对象，React只需更新组件的state，然后根据新的state重新渲染用户界面即可，不需要操作DOM。

- https://blog.csdn.net/zhouziyu2011/article/details/70741653

## Redux的流程中间件（thunks   saga   logger   dvtools的理解，用法）
 - https://www.jianshu.com/p/27fe63d14439

## 比较redux和vuex的区别

>vuex的流向：view——>commit——>mutations——>state变化——>view变化（同步操作）
          > view——>dispatch——>actions——>mutations——>state变化——>view变化（异步操作）

> redux的流向：view——>actions——>reducer——>state变化——>view变化（同步异步一样）

> redux的state数据设计，进行范式化。

- https://my.oschina.net/LinearLawX/blog/1617476

##  react router3是否用过，router4是否用过，3到4有什么改变

 - https://blog.csdn.net/u013356907/article/details/80398713

## react是什么层面上的框架，数据流是单向流还是双向绑定

 - 单向流 视图与数据交互层面

## 经常遇到的解决js兼容性问题列举至少三个（js）
 - 事件对象的兼容 aaddEventListener和attachEvent
 - event对象兼容 e.target 和 e.srcElement 的使用问题
 - 获取非行间样式的问题 currentStyle以及getComputeStyle 

## 不设置寛高的div，用至少两种方法，让它相对于页面水平垂直居中

 - https://blog.csdn.net/jiangbo_phd/article/details/49046143

## this.setState()(两个特性 原理 )

 - https://www.jianshu.com/p/a883552c67de
 - http://www.php.cn/js-tutorial-398065.html

## 实现数据双向绑定

``` js

import React from "react"
import ReactDOM from "react-dom"

export default class DataBind extends Comonent{
    constructor(){
        super()
        this.state = {
            value: "wzy"
        }
    }
    handleChange(e){
        this.setState({
            value : e.target.value
        )
    }
    
    render(){
        return(
            <div>
                <input value={this.state.value} onChange={this.handleChange.bind(this)}><input/>
                <p>{this.state.value}<p/>
            <div/>
        )
    }
    
}

```
## React项目遇到的问题

> 初期的this指向的问题，有些地方不能用箭头函数，比如render

> setState的队列问题

## eact的优势以及特点
 - 运行速度快，不直接操作dom
 - 跨浏览器兼容 兼容ie8
 - 单项数据流 ,便于查找问题
 - 所有都是组件 规范化

## this的理解，如何使用
 - this表示函数运行时，自动生成的一个内部对象，它指向的是对象本身，通过这个可以调用对象内部的属性和方法，但this的指向会随着函数嵌套的层级而改变，总归来说就是谁调用指向谁，

  - 普通函数 this指向window
  - 事件函数 this指向事件对象
  - 构造和函数 this指向实例
  - 对象 this指向对象

## 浏览器内核
 - ie trident
 - 火狐 gecko
 - 欧朋 presto
 - 苹果 webkit
 - 谷歌 blink

## bfc

> bfc是块级作用域上下文，在这个环境下按照一定规则布局是不会影响相邻环境的布局，很好的隔绝了自己对外部环境的干扰，如浮动元素

形成 BFC 的条件

1、浮动元素，float 除 none 以外的值； 
2、绝对定位元素，position（absolute，fixed）； 
3、display 为以下其中之一的值 inline-blocks，table-cells，table-captions； 
4、overflow 除了 visible 以外的值（hidden，auto，scroll）










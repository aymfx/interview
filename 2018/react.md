## 什么是react
 - react是一个构建UI的js库
 - react不是mvc框架，只是一个视图层的库

## react的特点
 - 使用jsx来构建组件
 - 性能高，采用虚拟dom和diff算法

## 为什么要用react
 - 组件化开发
 - 技术成熟 适用于大型Web项目
 - facebook团队维护，可靠

## 虚拟dom

> react将dom抽象成虚拟dom，虚拟dom就是一个对象用来描述dom，通过比较前后两个对象的差异，最终把变化的部分渲染，提高渲染效率

> 原生的dom发生更改时，需要遍历，原生dom可遍历的属性多大231个，且大部分跟渲染无关，更新页面代价大

## VituralDOM的处理方式
- 用js对象结构表示dom结构，然后构建一颗真正的dom树，插入到文档当中
- 当状态发生变化时，重新创建一个新的对象树，然后新树和旧树进行比较，记录两棵树的差异
- 把2所记录的差异应用到步骤一的所真正构建的dom树上去，视图更新

## Diff算法

> 两种假定
 - react中两个不同的元素会产生不同的树(根元素不用结构树一定不同)
 - 开发者可用通过key属性指定不同树种没有发生改变的子元素

> 根据这两种假定定义的说明
 - 如果两棵树的根元素类型不同，react会销毁旧树，创建新树
 - 对类型相同的reactdom元素，只会比较两者属性是否相同，只更新不同的属性，当处理完这个dom节点，react也会递归处理子元素
 - 子元素追加操作，不影响性能，但是如果是插入操作会删除原来的元素，然后重新绘制，当加入key时， 不会删除，只会做移动

 > 说明
  - key在内部使用，不会传递到组件
  - key值与兄弟节点唯一就好，不需要全局唯一
  - 尽量减少数组的index作为key，数组插入元素的时候效率很低


## createElement()
> 参数1：元素名称  参数2：元素属性对象(null表示无)  参数3：当前元素的子元素string||createElement() 的返回值

 - 代码编写不友好，太复杂
 - 一般 用jsx代替

## JSX注意点
 - 需要babel-preset-react 转换
 - className代替class htmlFor代替for属性
 - js代码只能写在{}中，只能是表达式
 - {/* 我是注释*/}

## React组件的概念
 - 组件是由一个个html组成
 - 组件类似于js的函数，接受一个props的参数，返回一个组件的对象， 用来展示页面的内容

## 创建组件的两种方式
 - 通过js函数创建 (无状态的组件)
 - 通过class创建 (有状态的组件)

## 两种创建组件的场景说明
 - 如果组件仅仅是为了展示数据可以使用函数组件
 - 如果组件有业务逻辑，还需要操作数据，那么需要class创建组件，因为要state

## 函数创建需要注意的点
 - 函数名是大写的
 - 必须有返回值 jsx对象或者null
 - jsx只有一个根元素
 - 返回值用括号包裹

## 父子组件传递数据
 - props
 - props是一个只读的对象，无法再添加修改属性

## props和state 区别

> props
 - 作用:给组件传递数据，一般用于父子组件的传递
 - 说明:React把传递给组件的属性转换成一个props对象
 - 特点:props是只读的，无法给props添加修改属性
 - props.children可以获取组件内容

>  state
 - 作用:用来给组件提供组件内部使用的数据
 - 注意:只有通过class创建的组件才有状态
 - 状态是私有对的，完全由组件控制
 - 不要在state中添加render()方法中不要的数据，影响性能
 - 不要在render()调用setState()修改state的值

## react生命周期

> 创建阶段 mounting

constructor()
 - 获取props 初始化state

componentWillMount()
 - 在组件还没挂在前调用,在render()之前，所以同步的设置状态不会触发重新渲染
 - 用于设置定时器和ajax请求

render()
 - 开始渲染页面，不要调用setState()方法，否则会进行递归渲染

componentDidMount()
 - 组件已经挂在到页面
 - 可以操作dom了

> 运行阶段 Updating

componentWillReceiveProps()
 - 组件接受到新的props触发的请求

shouldComponentUpdate()
 - 根据这个方法的返回值是否重新渲染这个组件，返回true重新渲染
 - 通过条件来渲染组件，提升组件性能

componentWillUpdate()
 - 组件将要跟新了，不要操作state

componentDidUpdate()
 - 组件更新完毕，接受两个旧的参数和状态

> 卸载阶段 Unmounting

componentWillUnmount()
 - 清除定时器
 - 清除dom的事件
 - 清除在componentDidMount创建的对象






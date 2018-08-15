
// let app = document.querySelector('#app');

/* window.addEventListener('beforeunload', function () {
    alert(12121)
    var message = "I'm really going to miss you if you go.";
    event.returnValue = message;
    event.preventDefault();
    return message;
}) */



/* let app = document.querySelector('#app');
window.addEventListener('DOMContentLoaded',function(){
    console.log('DOMContentLoaded');
})
window.addEventListener('load',function(){
    console.log('load');
})

document.addEventListener('readystatechange',function(){
    console.log('readystatechage');
}) */

/* let app = document.querySelector('#app');

window.addEventListener('load',function(){
    console.log('load');
})

window.addEventListener('pageshow',function(){
    console.log('pageshow');
    console.log('persisted',event.persisted);
})
window.addEventListener('pagehide',function(){
    console.log('pagehide');
    console.log('persisted',event.persisted);
})

window.addEventListener('hashchange',function(){
    console.log(1212);
})

window.addEventListener('orientationchange',function(event){
    console.log(event,999)
}) */

/* var btn = document.getElementById("myBtn");
//创建事件对象
var event = document.createEvent("MouseEvents");
//初始化事件对象
event.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0,
false, false, false, false, 0, null);
//触发事件
btn.dispatchEvent(event); */

/* var obj = document.getElementById("myBtn");

// 添加一个适当的事件监听器
obj.addEventListener("cat", function(e) { console.log(e.detail) })

// 创建并分发事件
var event = new CustomEvent("cat", {"detail":{"hazcheeseburger":true}})
obj.dispatchEvent(event) */

var obj = document.getElementById("myBtn");
// 创建事件
var event = document.createEvent('Event');

// 定义事件名为'build'.
event.initEvent('build', true, true);

// 监听事件
obj.addEventListener('build', function (e) {
  // e.target matches elem
  console.log(1212)
}, false);

// 触发对象可以是任何元素或其他事件目标
obj.dispatchEvent(event);


// 添加一个适当的事件监听器
obj.addEventListener("cat", function(e) { console.log(666  ) })

// 创建并分发事件
var event = new CustomEvent("cat", {"detail":{"hazcheeseburger":true}})
obj.dispatchEvent(event)
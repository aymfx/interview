
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

let app = document.querySelector('#app');

window.addEventListener('load',function(){
    console.log('load');
})

window.addEventListener('pageshow',function(){
    console.log('pageshow');
})
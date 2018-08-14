// let div = document.querySelector('#div');

/* div.attachEvent('onclick',function(event){
    console.log(this.id)
    console.log(event)
}) */
/* div.addEventListener('click',function(event){
    console.log(this)
    console.log(event)
}) */

/* div.onclick = function(e){
    e = e || event;
    console.log(this)
    console.log(e.currentTarget )
    console.log(e)
    // debugger;
    console.log(e.currentTarget=== this)
    console.log(e.target=== this)
} */

/* window.onload = function () {
    console.log(this, 'onload')
}

window.onresize = function () {
    console.log(this, 'resize')
}


let div = document.querySelector('#div');

div.onclick = function (e) {
    throw new Error();
}

document.body.onerror = function () {
    console.log(this, 'error')
}



document.body.onscroll = function () {
    console.log(this, 'scroll')
}
document.body.onselect = function () {
    console.log(this, 'select')
} */



/* let div = document.querySelector('#div');

document.onkeypress = function (event) {
    var keys = new Array();
    console.log(event)
    if (event.shiftKey) {
        keys.push("shift");
    }
    if (event.ctrlKey) {
        keys.push("ctrl");
    }
    if (event.altKey) {
        keys.push("alt");
    }
    if (event.metaKey) {
        keys.push("meta");
    }
    console.log("Keys: " + keys.join(","));
} */

/* let div = document.querySelector('#div');
let btn = document.querySelector('input');

div.onmouseover = function(event){
    console.log(event.relatedTarget)
    console.log(event)
}
btn.onclick = function(event){
    console.log(event.relatedTarget)
    console.log(event)
} */


/* let div = document.querySelector('#div');
let btn = document.querySelector('input');

document.onmousewheel = function(event){

    console.log(event)
} */


/* let div = document.querySelector('#div');
let btn = document.querySelectorAll('input');
console.log(btn[1])
btn[1].onkeypress = function(event){
    console.log(event.getModifierState("Shift"))
    console.log(event)
}
 */



/* let div = document.querySelector('#div');
let btn = document.querySelectorAll('input');
console.log(btn[1])
btn[0].focus();
btn[0].addEventListener('keypress',function(event){
    console.log(event)
})

btn[1].addEventListener('compositionstart',function(event){
    console.log(event)
}) */


/* let app = document.querySelector('#app');

app.addEventListener('DOMNodeRemoved',function(){
      console.log('DOMNodeRemoved',event)
})
app.addEventListener('DOMSubtreeModified',function(){
      console.log('DOMSubtreeModified',event)
})
app.addEventListener('DOMNodeInserted',function(){
      console.log('DOMNodeInserted',event)
})
app.firstElementChild.addEventListener('DOMNodeRemovedFromDocument',function(){
      console.log('DOMNodeRemovedFromDocument',event)
})
app.addEventListener('DOMAttrModified',function(){
      console.log('DOMAttrModified',event)
})
app.addEventListener('DOMCharacterDataModified',function(){
      console.log('DOMCharacterDataModified',event)
})

let node  = app.removeChild(app.firstElementChild);
node.addEventListener('DOMNodeInsertedIntoDocument',function(){
    console.log('DOMNodeInsertedIntoDocument',event)
})


app.insertBefore(node,app.firstElementChild)
 */

let app = document.querySelector('#app');

document.body.addEventListener('contextmenu', function (event) {
    console.log(1222)
    event.preventDefault()
    var menu = document.getElementById("myMenu");
    menu.style.left = event.clientX + "px";
    menu.style.top = event.clientY + "px";
    menu.style.visibility = "visible";
})
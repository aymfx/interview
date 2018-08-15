let form = document.forms[0];

console.log(form.length);
console.log(form.acceptCharset);
console.log(form.action);
console.log(form.elements);
console.log(form.enctype);
console.log(form.method);
console.log(form.age);
console.log(form.elements[0]);
console.log(form);

/* form.elements[0].stepUp();
form.elements[0].stepUp();
form.elements[0].stepUp();
form.elements[0].stepUp();
form.elements[0].stepDown();

console.log(form.elements[2].checkValidity()) */

console.log(form.elements[0].add());


/* window.addEventListener('copy',function(event){
     console.log("粘贴");
     alert(0);
    //  event.preventDefault();
     console.log(event)
})
window.addEventListener('paste',function(event){
     console.log("粘贴");
     alert(0);
    //  event.preventDefault();
     console.log(event.clipboardData.getData('text'))
}) */

var alert = console.log
/* var xhr = new XMLHttpRequest();

xhr.open('get','https://api.douban.com/v2/book/1220562',true)

xhr.onload = function(){
    if(xhr.status>=200){
        console.log(122)
    }else{
        console.log(500)
    }
}

xhr.onprogress = function(event){
    var divStatus = document.getElementById("status");
    if (event.lengthComputable){
    divStatus.innerHTML = "Received " + event.position + " of " +
    event.totalSize +" bytes";
    }
}

xhr.send(null) */

/* function Person(name, age, job) {
    if(new.target===undefined){
        throw new '要通过new'
    }
    this.name = name;
    this.age = age;
    this.job = job;
}

var person = new Person("Nicholas", 29, "Software Engineer");
alert(window.name); //"Nicholas"
alert(window.age); //29
alert(window.job); //"Software Engineer" */

/* function Polygon(sides) {
    if (this instanceof Polygon) {
        this.sides = sides;
        this.getArea = function () {
            return 0;
        };
    } else {
        return new Polygon(sides);
    }
}
function Rectangle(width, height) {
    Polygon.call(this, 2);
    this.width = width;
    this.height = height;
    this.getArea = function () {
        return this.width * this.height;
    };
}
var rect = new Rectangle(5, 10);
alert(rect.sides); //undefined */

/* function Polygon(sides){
    if (this instanceof Polygon) {
    this.sides = sides;
    alert(sides);
    this.getArea = function(){
    return 0;
    };
    } else {
    return new Polygon(sides);
    }
    }
    function Rectangle(width, height){
    console.log(this)
    Polygon.call(this, 2);
    this.width = width;
    this.height = height;
    this.getArea = function(){
    return this.width * this.height;
    };
    }
    // Rectangle.prototype = new Polygon();
    var rect = new Rectangle(5, 10);
    alert(rect.sides); //2 */

/*   function bind(fn,contxt){
      return function(){
          return fn.apply(contxt,arguments)
      }
  } */

/*   function add(num1){
      return function(num2){
          return num1+num2
      }
  }

  console.log(add(3)(4)) */

/* function add(num1,num2){
    return num1+num2
} */

/* let obj = {age:18}
console.log(obj.age);
obj.age = 19
console.log(obj.age);

Object.preventExtensions(obj)
obj.s = 190
console.log(obj.s);
delete obj.age;
console.log(obj.age); */

/* let obj = {
    age:18
}
alert(Object.isExtensible(obj))
Object.preventExtensions(obj)
alert(Object.isExtensible(obj)) */

/* let obj = {
    age:18
}

Object.seal(obj)

delete obj.age;
console.log(obj.age);
console.log(Object.isSealed(obj)); */

/*     let obj = {
        age:18
    }

    Object.freeze(obj)

    delete obj.age;
    console.log(obj.age);

    obj.age = 19
    console.log(obj.age);

    console.log(Object.isFrozen(obj)); */
/* 
    document.addEventListener('storage',function(event){
         console.log('this is a',event);
    })

    localStorage.setItem('name','hah') */

/*     var indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB ||
window.webkitIndexedDB;
   var request,database;
   request = indexedDB.open('admin');
   
   request.onerror = function(event){
       console.log(event,'error');
   }
   request.onsuccess = function(event){
       database = event.target.result;
       console.log(database)
   } */
/* var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame,
    div = document.getElementById('status'),
    startTime = window.mozAnimationStartTime || Date.now();
console.log(requestAnimationFrame);
div.style.width = 10 + '%';
function updateProgress(timestamp) {
    //计算两次重绘的时间间隔
    var drawStart = (timestamp || Date.now()),
        diff = drawStart - startTime;
    //使用 diff 确定下一步的绘制时间
    //把 startTime 重写为这一次的绘制时间
    startTime = drawStart;
    console.log(diff)
    div.style.width = (parseInt(div.style.width) + 5) + "%";
    if (div.style.width != '80%') {
        requestAnimationFrame(updateProgress);
    }
}
// div.style.width = 25 + "%";
requestAnimationFrame(updateProgress); */

/* function handleVisibilityChange(){
    var output = document.getElementById("status"),
    msg;
    if (document.hidden || document.msHidden || document.webkitHidden){
    msg = "Page is now hidden. " + (new Date()) + "<br>";
    } else {
    msg = "Page is now visible. " + (new Date()) + "<br>";
    }
    output.innerHTML += msg;
    }
window.addEventListener('webkitvisibilitychange',handleVisibilityChange) */


/* window.onload = function(){
     
}

let flies = document.getElementById('filelist');
    console.log(flies.files);
    flies.addEventListener('change',function(event){
        console.log(event.files,1212)
    })  */

var droptarget = document.getElementById("droptarget");
function handleEvent(event) {
    console.log(1212)
    var info = "",
        output = document.getElementById("output"),
        files, i, len;
    
    console.log(event.type)
    if(event.type!='dragover' && event.type!='dragenter'){
        debugger;
    }
    if (event.type == "dragover") {
        files = event.dataTransfer.files;
        console.log(event)
        
        i = 0;
        len = files.length;
        while (i < len) {
            info += files[i].name + " (" + files[i].type + ", " + files[i].size +
                " bytes)<br>";
            i++;
        }
        output.innerHTML = info;
    }
    return false;
}

droptarget.addEventListener('drag',handleEvent)
droptarget.addEventListener('dragover',handleEvent)
droptarget.addEventListener('dragenter',handleEvent)
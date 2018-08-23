var length = 10;

function add(){
    // console.log(this)
    console.log(this.length)
}

obj = {
    length:4,
    meth:function(fn){
        fn()
        // console.log(arguments[0])
        arguments[0]();
    }
}


obj.meth(add)

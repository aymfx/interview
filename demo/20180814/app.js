/* window.addEventListener('popstate',function(event){
    var state = event.state;
    if (state){ //第一个页面加载时 state 为空
     this.console.log(state);
    }
}) */

function testFinally(){
    try {
        
        return 2;
    } catch (error){
    return 1;
    } finally {
    return 0;
    }
    }
console.log(testFinally())
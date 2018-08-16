console.log(this, self);

self.onmessage = function (event) {
    var data = event.data;
    console.log(event);
    //别忘了，默认的 sort()方法只比较字符串
    
    self.postMessage(data.type);
}
var worker = new Worker('./work1.js')

worker.postMessage({
    type: 'commonf',
    message: 'start'
})

worker.onmessage = function (event) {
    console.log(event.data);
}

worker.onerror = function (event) {
    console.log("ERROR: " + event.filename + " (" + event.lineno + "): " +
        event.message);
};
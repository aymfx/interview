window.onload = function () {
    frames["richedit"].document.designMode = "on";
    /* var div = document.getElementById("richedit");
    div.contentEditable = "true"; */
    //转换粗体文本
    console.log(frames["richedit"].document);
    let editor = this.document.getElementById('editor');
    editor.onclick = () => {
        frames["richedit"].document.execCommand("bold", false, null);
        //转换斜体文本
        frames["richedit"].document.execCommand("italic", false, null);
        //创建指向 www.wrox.com 的链接
        frames["richedit"].document.execCommand("createlink", false,
            "http://www.wrox.com");
        //格式化为 1 级标题
        frames["richedit"].document.execCommand("formatblock", false, "<h1>");
        var result = frames["richedit"].document.queryCommandEnabled("bold");
        var isBold = frames["richedit"].document.queryCommandState("bold");
        this.console.log(result,120,isBold);

    }
}
(function () {
    'use strict';
    // Cài đặt giao diện =================================
    // html
    $("body").append(`
    <div id="controlPanel">
    <div id="controlPanelheader">
        GPT Auto Content
        <button onclick="hideCP()">-</button>
    </div>
    <div id="cpBody">
        <label for="keyword">Keyword</label> &lt;%= keyword%&gt;
        <input id="keyword" value="hình nền laptop 4k">
        <label for="request">Request 1</label> &lt;%= response1%&gt;
        <textarea id="request" rows="5">Hãy viết 1 tiêu đề theo kiểu "top 10" và phong cách đầy hào hứng cho từ khóa "&lt;%= keyword%&gt;". Yêu cầu phải bắt đầu bằng từ khóa "&lt;%= keyword%&gt;"</textarea>
        <label for="request2">Request 2</label> &lt;%= response2%&gt;
        <textarea id="request2" rows="5">Hãy viết một bài viết tiếng việt dài khoảng 1500 từ giới thiệu về file "Autodesk Maya 2024" và khuyến khích người dùng get link fshare của file trên từ trang "getlinkfshare.net". Trong bài viết thỉnh thoảng nên nhắc đến từ khóa "get link fshare" hoặc các cụm từ đồng nghĩa</textarea>

        <button id="start">Start</button>
    </div>
</div>
<style>
    #controlPanel {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999;
        width: 260px;
        height: 50%;
        background-color: #202123;
        color: #eee;
    }
    #controlPanelheader {
        padding: 10px;
        cursor: move;
        z-index: 1000;
        text-align: center;
        background-color: #000;
        font-weight: bold;
    }
    #controlPanelheader > button{
        float: right;
        margin-top: -4px;
    }
    #cpBody {
        padding: 5px;
        text-align: left;
    }
    #cpBody input, #cpBody textarea{
        width: 100%;
        padding: 3px;
        margin-bottom: 10px;
        background-color: #444;
        color: #bbb;
    }
    #cpBody button{
        padding: 3px;
        margin-bottom: 10px;
        background-color: #444;
    }
</style>
    ` );
    dragElement(document.getElementById("controlPanel"));
})();
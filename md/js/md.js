$(document).ready(function(){
    save();
});

//setMyOptions 设置样式
function setMyOptions() {
    //var markedRenderer  = new marked.Renderer(); 设置特殊样式
    var rendererMD = new marked.Renderer();
    marked.setOptions({
        renderer: rendererMD,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });
    marked.setOptions({
        highlight : function (code) {
            return hljs.highlightAuto(code).value;
        }
    });
}

//加载textarea内容
function save() {
    setMyOptions();
    var MarkdownHtml = marked($(".ace_text-input").val());
    //console.log("MarkdownHtml===============1"+MarkdownHtml);
    document.getElementById('wmd-preview').innerHTML=MarkdownHtml;
}

//监听textarea事件
document.getElementById("ace_text-input").addEventListener("input", myFunction);
function myFunction() {
    save();
}


function navModel(model) {
    console.log("model=============="+model);
    if ('e' == model){ /*编辑模式 e */
        $(".pull-left").show();
        $(".pull-right").hide();
        $(".pull-left").css("width", "100%");
        $(".pull-right").css("margin-left", "0px");

    }
    if ('p' == model){ /*预览模式 p */
        $(".pull-left").show();
        $(".pull-right").show();
        $(".pull-left").css("width", "50%");
        $(".pull-right").css("margin-left", "0px");
    }
    if ('r' == model){ /*阅读模式 r */
        $(".pull-left").hide();
        $(".pull-right").show();
        $(".pull-left").css("width", "50%");
        $(".pull-right").css("margin-left", "500px");
    }
}

$(function(){
    $("li").hover(function(){
        $(this).append("<div><p>" + $(this)
        .children("a").children("img").attr("alt") + "</p></div>");

        $(this).children("div").stop().fadeIn(300);
        $(this).children("div").children("p").stop().
        animate({"top" : 0}, 300);
    },function(){
        $(this).children("div").stop().fadeOut(300);
        $(this).children("div").children("p").stop().
        animate(300, function(){
            $(this).parent("div").remove();
        });
    });
});


$(function(){
    $(".works__list").hover(function(){
        $(this).append('<div class="link"><p>'+ $(this)
        .children("a").children("img").attr("alt") + "</p></div>");
        $("a").addClass("changed");
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


    $('.single-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: true,
        speed: 600,
        infinite: false,
        prevArrow: '<span class="prev-arrow"></span>',
        nextArrow: '<span class="next-arrow">Next</span>',
        });
    
    
    
        $('.next-arrow').on('click', function(){
      if ($(this).hasClass('slick-disabled')){
        this.innerHTML = '<a href="javascript:history.back()">Works Index</a>';
      }
    })
    
});
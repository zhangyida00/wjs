$(function() {
    
    //屏幕大小变化
    function resize() {
        var windowWidth = $(window).width();
        var Issmallwidth = windowWidth < 768;
        $("#main-slide > .carousel-inner >.item").each(function(i, item) {
            var bgImage = $(item).data(Issmallwidth ? 'image-xs' : 'image-lg');
            $(item).css("backgroundImage", 'url("' + bgImage + '")');

            //小图时能等比例缩放
            if(Issmallwidth){
                $(item).html('<img src="' + bgImage + '" />');
            }else{
                $(item).empty();
            }
        });
    }
    $(window).on('resize',resize).trigger('resize');

})
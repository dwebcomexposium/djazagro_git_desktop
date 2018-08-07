/**!
 Agence'O Scripts
 Divers scripts

 @contributors: Agence'O
 @date-created: 2016-06-28
 @date-updated: 2016-07-18
 */

;(function ($) {

    function fixTrianglePosition(){
        $("#zone2 .list-articles .la-item[class*='topic_']").each(function () {
            var imageHeigth = $(this).find(".la-item-img-wrapper img").height()
            $(this).find(".la-item-img-wrapper").css({"height": imageHeigth});
            //var triangleMargin = $(this).find(".la-item-img-wrapper img").height() - 60;
            //console.log(triangleMargin);
            //triangleMargin = (triangleMargin > 0)? triangleMargin : 0;
            //$(this).find(".triangleLabel").css({"top":triangleMargin});
            //console.debug($(this).find(".la-item-img-wrapper:before").css());

        })
    }

    $(document).ready(function () {
         $("#zone2 .list-articles .la-item[class*='topic_'] img").each(function () {
            if(!$(this).parent().hasClass("la-item-img-wrapper")){
                $(this).wrap("<div class='la-item-img-wrapper'></div>");
                // $("<div class='triangleLabel'><div>").insertBefore(this);
                $(this).css({"max-width":"100%"});
                $(".la-item .la-item-img-wrapper").css({"max-width":"35%"});
            }
        });
        fixTrianglePosition();
    });



    $(window).resize(function () {
        fixTrianglePosition();
    });
    
})(jQuery);
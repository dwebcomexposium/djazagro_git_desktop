/**!
 AGENCE'O - Scripts
 General scripts file

 @contributors: Guillaume Bouillon (Agence'O)
 @date-created: 2016-06-30
 @date-updated: 2016-07-06
 */

;(function ($) {

    /**
     * Switch article-illust & article-intro
     */
    var $articleIllust = $('<div>').addClass('article-illust').append($('.article-title .at-illust'));
    $('.article-content').before($articleIllust);

    /**
     * Flickr generated slider block
     */
    $('.ao-flicker-container').aoFlickr({
        user_id: '134367766@N06',
        photoset_id: '72157667429984532',
        wrapper: '<div class="slider ao-flickr-wrapper" />',
        wrapper_item: '<div class="slider-item ao-flickr-item" />',
        onFinish: function () {
            $(this).find('.ao-flickr-wrapper').slick({
                infinite: true,
                //centerMode: true,
                //variableWidth: true,
                slidesToShow: 5,
                slidesToScroll: 5,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }]
            });
        }
    });

    /**
     * Homepage SEO block
     */
    $('#zone2 .block.edito').find('h2,h3').each(function (i, item) {
        var wrap_class = 'js-wrap_' + $(this).prop("tagName").toLowerCase();
        var wrap_elem = $('<div />').addClass(wrap_class);
        $(this).nextUntil('h2,h3').andSelf().wrapAll(wrap_elem);
    });

    /**
     * Page header width
     */
    $(window).resize(function () {
        $('.page-header').width($(window).width());
    }).resize();


})(jQuery);

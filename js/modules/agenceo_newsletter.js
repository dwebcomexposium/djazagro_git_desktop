/**
 * Created by Boubou on 28/06/2016.
 */
(function ($) {
    $(window).load(function () {
        $('<div class="block block-small global-newsletter-form"><div id="icon-newsletter-block"></div></div>').insertBefore("div.global-search-form");
        resizeNLBlock();
        $('<div class="icon-close-newsletter"></div>').insertBefore("div.newsletter-form .nf-main-content.cxp-newsletter .box-dark");
    });

    function resizeNLBlock() {
        var logo_space = ($(".site-banner-event").width() > 0) ? $('.site-banner-event').outerWidth(true) : $('.site-banner-site-banner-title').outerWidth(true);
        var button_space =  $('#icon-newsletter-block').outerWidth(true) + $('.site-banner .gsf-trigger').outerWidth(true) + $('.site-banner .ls-trigger').outerWidth(true);
        var empty_space = $(window).width() - (logo_space + button_space + 2);

        $('.site-banner .main-navigation').width(empty_space);

       /* $('.page-rubric .block-small.global-newsletter-form').css({"width": emptySpace - 12});
        $('.article_list .block-small.global-newsletter-form').css({"width": emptySpace - 12});
        $('.catalogue.exposant .block-small.global-newsletter-form').css({"width": emptySpace - 3});
        $('.body-corpo.search .block-small.global-newsletter-form').css({"width": emptySpace - 3});
        $('.catalogue.exposant.fiche .block-small.global-newsletter-form').css({"width": emptySpace - 12});*/
    }

    $(window).resize(function () {
        resizeNLBlock();
    });

    $(document).on('click', '#icon-newsletter-block', function () {
        $('.block-page.newsletter-form').css({"display": "block", "opacity": "1"});
    });

    $(document).on('click', '.block-page.newsletter-form', function (e) {
        if (e.target != this) return;
        $('.block-page.newsletter-form').css({"display": "none", "opacity": "0"});
    });

    $(document).on('click','.newsletter-form .icon-close-newsletter', function(e) {
        if(e.target != this) return;
        $('.block-page.newsletter-form').css({"display":"none","opacity":"0"});
    });

})(jQuery);
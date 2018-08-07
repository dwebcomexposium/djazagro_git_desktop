/**
 * Created by Boubou on 28/06/2016.
 */
(function ($) {

    function getPaddingForSelectListExposant(){
        var breadcrumbsBlockHeight = $(".catalogue.exposant #zone2 .breadcrumb-nav").outerHeight();
        var introBlockHeight = $(".catalogue.exposant .block.block-page.edito.mod-catal").outerHeight(true);
        breadcrumbsBlockHeight = (breadcrumbsBlockHeight) ? breadcrumbsBlockHeight : 0;
        introBlockHeight =(introBlockHeight) ? introBlockHeight : 0;
        $(".catalogue.exposant #zone3").css({"padding-top":breadcrumbsBlockHeight + introBlockHeight});
    }

    function getPaddingRightMenu(){
        var tempPadding = $(".article #zone2 .breadcrumb-nav").outerHeight();
        tempPadding = (tempPadding) ? tempPadding : 0;
        $(".article #zone3").css({"padding-top":tempPadding});
    }

    getPaddingForSelectListExposant();
    getPaddingRightMenu();

    $(window).resize(function(){
        getPaddingForSelectListExposant();
        getPaddingRightMenu();
    });

})(jQuery);
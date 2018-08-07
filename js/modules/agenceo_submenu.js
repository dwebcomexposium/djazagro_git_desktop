/**
 * Created by Boubou on 28/06/2016.
 */
(function ($) {

    function subMenu_resize() {
        $('.mn-item-lvl-1').each(function () {
            var leftmargin = $(this).offset().left;
            $(this).find('.mn-menu-submenu').css({
                "left": -leftmargin,
                "width": $(window).width()
            });
        });
    }

    $(window).resize(function () {
        //subMenu_resize();
        $('.mn-menu-submenu').width();
    }).resize();

    $('.site-banner .quicklinks a > span:gt(0)').each(function () {
        var me = $(this), t = me.text().split(' ');
        me.html('<strong>' + t.shift() + '</strong> ' + t.join(' '));
    });


})(jQuery);
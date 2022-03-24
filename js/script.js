/**
 * Created by mertozyilmaz on 7.06.2017.
 */

$(document).ready(function () {
    var accordion = $('#accordion'),
        related = $('.related-posts'),
        menu = $('#menu'),
        card = $('#card'),
        cardButton = $('.card-toggle'),
        menuButton = $('.menu-toggle'),
        close = $('.close-menu');

    (function($) {
        $.fn.clickToggle = function(func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function() {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
    }(jQuery));

    accordion.on('show.bs.collapse', function () {
        $('#accordion .in').collapse('hide');
    });

    if (related.length) {
        related.css('height', related.width() + 'px');
        window.addEventListener('resize', function(event){
            related.css('height', related.width() + 'px');
        });
    }

    /* ------------ Card */
    if (card.length) {
        close.click(function () {
            cardButton.parent().parent().css('padding-right', '0');
            card.css('right', '-400px');
        });

        cardButton.clickToggle(function () {
            if ($(window).width() > 767) {
                cardButton.parent().parent().css('padding-right', '400px');
            }
            card.css('right', 0);
            menu.css('right', '-400px');
            return false;
        }, function () {
            if ($(window).width() > 767) {
                cardButton.parent().parent().css('padding-right', '0');
            }
            card.css('right', '-400px');
            menu.css('right', '-400px');
            return false;
        });
    }

    /* ----------- Menu */
    if (menu.length) {
        close.click(function () {
            menuButton.parent().parent().css('padding-right', '0');
            menu.css('right', '-400px');
        });

        menuButton.clickToggle(function () {
            if ($(window).width() > 767) {
                menuButton.parent().parent().css('padding-right', '400px');
            }
            menu.css('right', 0);
            card.css('right', '-400px');
            return false;
        }, function () {
            if ($(window).width() > 767) {
                menuButton.parent().parent().css('padding-right', '0');
            }
            menu.css('right', '-400px');
            card.css('right', '-400px');
            return false;
        });

        menu.find('ul li a.drop-toggle').clickToggle(function () {
            menu.find('.drop-menu').slideDown('fast');
            return false;
        }, function () {
            menu.find('.drop-menu').slideUp('fast');
            return false;
        });
    }
});
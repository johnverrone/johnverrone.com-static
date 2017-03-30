$(window).load(function() {
    $('body').addClass('loaded');
});

$(document).ready(function(){
    // Cache the Window object
    $window = $(window);

    //Mobile navigation
    var pull = $('#pull');
    var menu = $('nav ul');
    var menuHeight = menu.height();

    var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );

    if (iOS) {
      $('#twitterButton').attr("href", "twitter://user?screen_name=johnverrone");
    }

    $('#hamburger').click(function(){
		$(this).toggleClass('open');
        menu.slideToggle();
	});

    $('header a').click(function() {
        if ($('#hamburger').hasClass('open')) {
            $('#hamburger').removeClass('open');
            menu.slideUp();
        }
    });

    $.localScroll();

    function hash_change(url) {
        var hash_url = "#/" + url.replace(" .work-wrapper", "");
        window.location.hash = hash_url;
    }

    $(window).scroll(function() {
        var shrinkHeight = 300;
        if ($(document).scrollTop() > shrinkHeight) {
            $('header').addClass('shrink');
        } else {
            $('header').removeClass('shrink');
        }
    });

    $('#twitterButton').hover(function() {
        $('#twitterPath').css({"fill":"#DE8642"});
            }, function() {
        $('#twitterPath').css({"fill":"#4D4D4D"});
    });
    $('#linkedinButton').hover(function() {
        $('#linkedinPath').css({"fill":"#DE8642"});
            }, function() {
        $('#linkedinPath').css({"fill":"#4D4D4D"});
    });
    $('#mailButton').hover(function() {
        $('#mailPath').css({"fill":"#DE8642"});
            }, function() {
        $('#mailPath').css({"fill":"#4D4D4D"});
    });
});

/*
 * Create HTML5 elements for IE's sake
 */
document.createElement("article");
document.createElement("section");

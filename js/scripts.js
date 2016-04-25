// Fade in effects

$(document).ready(function() {

    // Intro - final light rotations
    var toggleIntro = function(){
        $(".intro-line-5 b.visible").removeClass("visible").addClass("hidden")
        .next().add(".intro-line-5 b:first").last().removeClass("hidden").addClass("visible");
    }
    setInterval(toggleIntro, 1800);

    // Intro fade ins
    var arr = ['.intro__main .headline', '.intro__main .intro-line-2', '.intro__main .intro-line-3', '.intro__main .intro-line-4', '.intro__main .intro-line-5', '.site-nav'];
    var i = 1;
    $(arr[0]).addClass('active');
    var c = setInterval(function () {
        if(i <= (arr.length - 1)){
            $(arr[i]).addClass('active');
            i++;
        } else {
            clearInterval(c);
        }
    }, 350);

    // Other fade ins

    $('.profile-and-links').waypoint(function(direction) {
        // Initial fade in of section
        $('.profile-and-links').addClass('active');
        // Individual fade ins
        var arr = ['.profile-and-links__entry__link.link-1', '.profile-and-links__entry__link.link-2', '.profile-and-links__entry__link.link-3', '.profile-and-links__entry__link.link-4', '.profile-and-links__entry__link.link-5'];
        var i = 1;
        $(arr[0]).addClass('active');
        var c = setInterval(function () {
            if(i <= (arr.length - 1)){
                $(arr[i]).addClass('active');
                i++;
            } else {
                clearInterval(c);
            }
        }, 250);
    }, {
        offset: '50%',
        triggerOnce: true
    });

    $('.contact-prompt .grid__item').waypoint(function(direction) {
        $('.contact-prompt .grid__item').addClass('active');
    }, {
        offset: '70%',
        triggerOnce: true
    });

    $('.flickr-cta').waypoint(function(direction) {
        $('.flickr-cta').addClass('active');
    }, {
        offset: '60%',
        triggerOnce: true
    });

});
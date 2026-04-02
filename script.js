$(document).ready(function() { // now using j query

    // contact us form submission
    $('.contact-form').on('submit', function(event) {
        event.preventDefault();
        $('#successform').fadeIn();
        this.reset();
    });

    $('#closeformBtn').on('click', function() {
        $('#successform').fadeOut();
        $('html, body').stop.animate({
            scrollTop: 0
        }, 800);
    });

    // light mode toggle
    const $body = $('body');
    const $themeButtons = $('.themeToggle');

    function applyTheme(isLight) {
        if (isLight) {
            $body.addClass('light-mode');
        } else {
            $body.removeClass('light-mode');
        }

        $themeButtons.each(function() {
            if ($(this).hasClass('control-btn')) {
                $(this).text(isLight ? 'D' : 'L');
            } else {
                $(this).text(isLight ? 'Dark Mode' : 'Light Mode');
            }
        });
    }

    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme === 'light');

    $themeButtons.on('click', function() {
        const isCurrentlyLight = $body.hasClass('light-mode');
        const newTheme = !isCurrentlyLight;

        // local storage use to save the users theme, in case of refresh etc it will keep their choice
        localStorage.setItem('theme', newTheme ? 'light' : 'dark');
        applyTheme(newTheme);
    });

    // getting back to top logic button
    const $backToTopBtn = $('#backToTop');

    $(window).on('scroll', function() {
        // this bit of code checks how far user is scrolled down, cause when the user is already on the top
        //the button is pretty much useless and not needed
        if ($(window).scrollTop() > 300) {
            $backToTopBtn.show();
        } else {
            $backToTopBtn.hide();
        }
    });

    $backToTopBtn.on('click', function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 800);
    });

    // forcing the video to play on mopbile bug fix - wasnt playing automatically on mobile
    const $bgVideo = $('.bg-video');

    if ($bgVideo.length) {
        $bgVideo[0].play().catch(() => {
            // just incase the inital play command dosent work, when user touches ANYWHERE, it will force play
            $(document).one('touchstart', () => {
                $bgVideo[0].play();
            });
        });
    }

});


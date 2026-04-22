$(document).ready(function() {

    // contact us form submission
    $('.contact-form').on('submit', function(event) {
        event.preventDefault();
        $('#successform').addClass('active').fadeIn();
        this.reset();
    });

    $('#closeformBtn').on('click', function() {
        $('#successform').removeClass('active').fadeOut();
        $('html, body').stop().animate({
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

    // bug fix: the nav bar theme button wasnt working because it was only targeting the .themeToggle class, but the nav bar button also has the control-btn class, so i had to add a separate event listener for it
    $('#themeToggle').on('click', function() {
        const isCurrentlyLight = $body.hasClass('light-mode');
        const newTheme = !isCurrentlyLight;

        localStorage.setItem('theme', newTheme ? 'light' : 'dark');
        applyTheme(newTheme);
    });

    // Smooth scroll for nav links
    $('.nav-links a[href^="#"], .btn-light[href^="#"], .btn-dark[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        const $target = $(target);
        
        if ($target.length) {
            $('html, body').stop().animate({
                scrollTop: $target.offset().top - 70
            }, 800);
        }
    });

    // Back to top button
    const $backToTopBtn = $('#backToTop');

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            $backToTopBtn.fadeIn();
        } else {
            $backToTopBtn.fadeOut();
        }
    });

    $backToTopBtn.on('click', function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 800);
    });

    // Bounce effect on scroll limits
    let lastScrollTop = 0;
    $(window).on('scroll', function() {
        let currentScroll = $(this).scrollTop();
        let maxScroll = $(document).height() - $(window).height();

        if (currentScroll === 0 && lastScrollTop > 0) {
            $('body').css('animation', 'bounce 0.6s ease');
            setTimeout(() => $('body').css('animation', 'none'), 600);
        } else if (currentScroll === maxScroll && lastScrollTop < maxScroll) {
            $('body').css('animation', 'bounce 0.6s ease');
            setTimeout(() => $('body').css('animation', 'none'), 600);
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
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

let slideIndex = 1;
showSlides(slideIndex);

// Next/Previous control
function plusSlides(n){
    showSlides(slideIndex += n);
}

// Thunbnail image controls
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slidesfade");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace ("active", "")
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


// form submission box logic

const form = document.querySelector('.contact-form');
const overlay = document.getElementById('successform');
const closeBtn = document.getElementById('closeformBtn');

form.addEventListener('submit', function(event) { 
    event.preventDefault();    
    overlay.style.display = 'flex'; 
    form.reset();            
});


closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none'; 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// light mode toggle logic -- inlcuding the mobile button
const themeButtons = document.querySelectorAll('.themeToggle');
const body = document.body;

function applyTheme(isLight) {
    if (isLight) {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
    }

    themeButtons.forEach(btn => {
        // ive to do this cause otherwise it was just giving a white box with the full text
        if (btn.classList.contains('control-btn')) {
            btn.textContent = isLight ? 'D' : 'L';
        } else {
            btn.textContent = isLight ? 'Dark Mode' : 'Light Mode';
        }
    });
}


const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme === 'light');

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const isCurrentlyLight = body.classList.contains('light-mode');
        const newTheme = !isCurrentlyLight;
        
        localStorage.setItem('theme', newTheme ? 'light' : 'dark');
        applyTheme(newTheme);
    });
});



// back to top button logic
const backToTopBtn = document.getElementById('backToTop');

window.onscroll = function() {
    // this makes the button appear after scrolling down 300px, and disappear when above that cause why would you need it before that.
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

//keeping the nice trans 
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// bug fix - this will hopefully force the video to play on mobile automatically
const bgVideo = document.querySelector('.bg-video');

if (bgVideo) {
    bgVideo.play().catch(() => {
        document.addEventListener('touchstart', () => {
            bgVideo.play();
        }, { once: true });
    });
}


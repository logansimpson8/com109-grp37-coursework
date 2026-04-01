

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

// light mode toggle logic

const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

// the pre check for whatever user had last time
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggleBtn.textContent = 'Dark Mode';
} else {
    themeToggleBtn.textContent = 'Light Mode';
}

// the manual switch logic
themeToggleBtn.addEventListener('click', function() {

    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light'); 
        themeToggleBtn.textContent = 'Dark Mode'; 
    } else {
        localStorage.setItem('theme', 'dark'); 
        themeToggleBtn.textContent = 'Light Mode'; 
    }
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
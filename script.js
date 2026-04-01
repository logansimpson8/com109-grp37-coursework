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
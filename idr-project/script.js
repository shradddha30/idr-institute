// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Logic with LocalStorage
document.getElementById('idr-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        msg: document.getElementById('message').value,
        time: new Date().toLocaleString()
    };
    let msgs = JSON.parse(localStorage.getItem('idr_msgs')) || [];
    msgs.push(data);
    localStorage.setItem('idr_msgs', JSON.stringify(msgs));
    alert('Thank you! Your interest has been saved.');
    this.reset();
});
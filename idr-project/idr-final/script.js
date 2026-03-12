document.getElementById('idr-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Data capture karna
    const formData = {
        name: e.target.querySelector('input[type="text"]').value,
        email: e.target.querySelector('input[type="email"]').value,
        message: e.target.querySelector('textarea').value,
        date: new Date().toLocaleString()
    };

    // Browser ki memory mein save karna
    let messages = JSON.parse(localStorage.getItem('idr_messages')) || [];
    messages.push(formData);
    localStorage.setItem('idr_messages', JSON.stringify(messages));

    alert('Message saved in browser! Press F12 > Application > Local Storage to see it.');
    console.log("All Messages:", messages);
    e.target.reset();
});
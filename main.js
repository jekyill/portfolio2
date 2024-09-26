(function(){
    // Initialize EmailJS with your public key (previously known as user_id)
    emailjs.init("MNs5hw3raPWluozKX"); // Replace with your actual public key
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Send form data using EmailJS
    emailjs.sendForm('service_q30e1dn', 'template_1ja2hv2', this)
        .then(function() {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Error: " + JSON.stringify(error));
        });
});

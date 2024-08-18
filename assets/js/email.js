emailjs.init('YOUR_USER_ID');

        // Handle form submission
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Send the email using EmailJS
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                .then(function(response) {
                    alert('Message sent successfully!');
                    document.getElementById('contact-form').reset(); // Reset the form
                }, function(error) {
                    alert('Failed to send message. Please try again.');
                    console.log('Error:', error);
                });
        });
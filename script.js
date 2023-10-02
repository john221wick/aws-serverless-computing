document.getElementById('contact-form').addEventListener('submit', 
function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a JSON object with the form data
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Make a POST request to the AWS API Gateway endpoint
    fetch('https://w5k7mhah5d.execute-api.ap-south-1.amazonaws.com/default/new-serverless', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the Lambda function
        document.getElementById('response').textContent = 'Message sent successfully!';
        console.log(data);
    })
    .catch(error => {
        document.getElementById('response').textContent = 'An error occurred while sending the message.';
        console.error('Error:', error);
    });
});


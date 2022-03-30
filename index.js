var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.preventDefault();

    var username = document.getElementById('userName').value;
    var email = document.getElementById('userEmail').value;
    var number = document.getElementById('userPhone').value;
    var message = document.getElementById('userMsg').value;

    var body = 'name: ' + username + '\n' + 'email: ' + email + '\n' + 'phone: ' + number + '\n' + 'message: ' + message;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "intigsol@gmail.com",
        Password: "veniodrjgqpkgrdu",
        To: 'intigsol@gmail.com',
        From: email,
        Subject: message,
        Body: body
    }).then(
        message => alert(message)
    );
});
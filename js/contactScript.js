document.getElementById("sendEmailButton").addEventListener("click", function() {
    const name = document.getElementById("idName").value;
    const email = document.getElementById("idEmail").value;
    const message = document.getElementById("idMessage").value;
    

    if (!name || !email || !message) {
        alert("Please review the fields in the form.");
        alert
        return;
    }

    Email.send({
        SecureToken: "70b4794b-dd23-46a0-a7e5-aafa1e45d789",
        To: "guadalupe.ccb23@gmail.com",
        From: "guadalupe.ccb23@gmail.com",
        Subject: `New contact from ${name}`,
        Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
    }).then(
        message => alert("Email sent successfully!")
    ).catch(
        error => alert("Failed to send email: " + error)
    );
});

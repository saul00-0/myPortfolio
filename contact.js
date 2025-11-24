function validateform()
{
    let uname = document.contactme.name.value;
    let email = document.contactme.email.value;
    let num = document.contactme.phone.value;
    let message = document.contactme.msg.value;

    if(uname == "" || email == "" || num == "" || message == "")
        alert("Please fill all the fields");
    else if(num.legth != 10)
        alert("Only provide a 10-digit number");
    else if(!email.includes("gmail.com") && !email.includes("yahoo.com") && !email.includes("utrgv.edu") && !email.includes("outlook.com"))
        alert("Email address should be either Gmail, Yahoo, Outlook, or UTRGV")
    else if(MessageChannel.legth <= 5)
        alert("Compose a longer message so I can help you better.")
    else{
        alert("Loading mail client");


        let subject = 'Message via Portfolio website from ${uname}';

        let body = 'From: ${email}\nPhone: ${num}\nMessage: ${message}\n'


        let mailtolink = 'mailto: saul.salinaslopez01@utrgv.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}';

        window.location.href = mailtolink;
    }


    

}
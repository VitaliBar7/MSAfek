document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.getElementById('contact-form');

    let sendEmail = (e) => {
        e.preventDefault(); 

        emailjs.sendForm('service_1tdmpk3', 'template_aos8fcx', contactForm, 'TXv5dnA1WmAWdKklv')
            .then(() => {
                alert("ההודעה נשלחה בהצלחה!");
                contactForm.reset(); 
            })
            .catch((error) => {
                console.error("שגיאה בשליחת הטופס:", error);
                alert("אירעה שגיאה בשליחת הטופס.");
            });
    };

    contactForm.addEventListener('submit', sendEmail);
});


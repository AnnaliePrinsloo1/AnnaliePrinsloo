//Get all needed elements from the DOM
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit");
const nameInput = document.querySelector("#iFirstName");
const surnameInput = document.querySelector('#iLastName');
const emailInput = document.querySelector('#iEmail')
const messageInput = document.querySelector('#message');

//Get needed data from email JS
const publickey = "fCp_w-NdWJj_y945R";
const serviceID = "service_6uam4nr";
const templateID = "template_34sduem";

//Initialize email JS with public key
emailjs.init(publickey);

//Add submit event to the form
contactForm.addEventListener('submit', e => {
    //Prevent form default behaviour
    e.preventDefault();
    //Change button text
    submitBtn.innerText = "just a moment...";
    //Gel all input field values
    const inputFields = {
        name: nameInput.value,
        surname: surnameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    }
    /*Send the email
    (Add service, template ID and input field valvue)*/
    emailjs.send(serviceID, templateID, inputFields)
    .then (() => {
        //Change button text
        submitBtn.innerText = "Message Sent Succcessfully";
        //Clear out all input fields
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }, (error) => {
    //Console log the error
    submitBtn.innertext = "Something went wrong";
    });
});
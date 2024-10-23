function showSidebar(){
    const classssidebar = document.querySelector('.sidebar')
    classssidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
// above code is responsive navigation only

//Form validation js starts from this point.

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('user_name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('user_email').value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(validRegex)){
        emailError.innerHTML = 'Email invalid'
        return false
    }
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateSubject(){
    var subject = document.getElementById('user_subject').value;

    if(subject.length == 0 || subject.length>25){
        subjectError.innerHTML = 'No Subject or Too Long';
        return false;
    }
    if(!subject.match(/^[A-Za-z]+$/)){
        subjectError.innerHTML = "Only alphabets are allowed"
        return false;
    }

    subjectError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;

}

function validateMessage(){
    var message = document.getElementById('user_message').value;
    let required = 30;
    let left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + "more characters required!"
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function sendMail(){
    let parms = {
        name: document.getElementById("user_name").value,
        email: document.getElementById("user_email").value,
        subject: document.getElementById("user_subject").value,
        message: document.getElementById("user_message").value,
    }
    emailjs.send("service_nthxsye","template_ky96837",parms);
    
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix the errors before proceeding!";
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }

    submitError.innerHTML = 'Successfully submitted!';
    sendMail();
    document.getElementById("contact_form").reset();
}



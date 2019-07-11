$(document).on('change', '.div-toggle', function() {
    var target = $(this).data('target');
    var show = $("option:selected", this).data('show');
    $(target).children().addClass('hide');
    $(show).removeClass('hide');
});
$(document).ready(function() {
    $('.div-toggle').trigger('change');
});


function contactFormValidation() {
    var name = document.forms["ContactForm"]["Name0"];
    var email = document.forms["ContactForm"]["Email0"];
    var phone = document.forms["ContactForm"]["phoneNumber0"];
    var msg = document.forms["ContactForm"]["subject0"];
    var message = document.forms["ContactForm"]["Message0"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf("@", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value == "") {
        window.alert("Please enter your telephone number.");
        phone.focus();
        return false;
    }

    if (msg.value == "") {
        window.alert("Please enter a Subject");
        msg.focus();
        return false;
    }

    if (message.value == "") {
        window.alert("Please enter your Message");
        message.focus();
        return false;
    }

    return true;


}

/*fucntion to call a specific modal if the URL contains #*/
$(document).ready(function($) {
    var target = document.location.hash.replace("#", "");
    if (target.length) {
        if (target == "submissionModal") {
            $('#submissionModal').modal('show');
        }
    }
    else {}
});


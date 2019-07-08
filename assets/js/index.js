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
    var name = document.forms["ContactForm"]["Name"];
    var email = document.forms["ContactForm"]["Email"];
    var phone = document.forms["ContactForm"]["phoneNumber"];
    var what = document.forms["ContactForm"]["subject"];
    var message = document.forms["ContactForm"]["Message"];

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

    if (what.value == "") {
        window.alert("Please enter a Subject");
        what.focus();
        return false;
    }

    if (message.value == "") {
        window.alert("Please enter your Message");
        message.focus();
        return false;
    }

    return true;
}
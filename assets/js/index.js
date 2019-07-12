$(document).on('change', '.div-toggle', function() {
    var target = $(this).data('target');
    var show = $("option:selected", this).data('show');
    $(target).children().addClass('hide');
    $(show).removeClass('hide');
});
$(document).ready(function() {
    $('.div-toggle').trigger('change');
});



/*function to call a specific modal if the URL contains #*/
$(document).ready(function($) {
    var target = document.location.hash.replace("#", "");
    if (target.length) {
        if (target == "submissionModal") {
            $('#submissionModal').modal('show');
        }
        if (target == "requestResponseModal") {
            $('#requestResponseModal').modal('show');
        }
    }
    else {}
});


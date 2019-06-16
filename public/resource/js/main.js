$(function () {
    $.getScript('/resource/js/bootstrap.min.js');
    $.getScript('/resource/js/adminlte.min.js');

    // load shared web parts
    $("#header").load("./shared/header.html");
    $("#footer").load("./shared/footer.html");

    $("#sidebar").load("./shared/sidebar.html", function () {
        $(".sidebar li.index-page").addClass("active");
        $(".sidebar li.labels-page").removeClass("active");
    });
});
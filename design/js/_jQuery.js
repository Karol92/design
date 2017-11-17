$(function () {
    $(".sortable1, .sortable2, .sortable3").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
});

window.onload = function () {
    $("#cos, i").click(function () {
        $("#myModal").show();
    });
    $(".close").click(function () {
        $("#myModal").hide();
    });
};
$(document).ready(function () {
    $("input[type=checkbox]").click(function () {
        $("label").toggle();
    });
});

// $("input[type=checkbox]").click(function () {
//     $("a").toggle();
//
// });


$( function() {
    $( ".controlgroup" ).controlgroup()
    $( ".controlgroup-vertical" ).controlgroup({
        "direction": "vertical"
    });
} );
$(function () {
    $(".sortable1, .sortable2, .sortable3").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
});

window.onload = function () {
    $("#cos, i").click(function () {
        $("#myModal").show();
        $('.new__task').children("button").text("Add task");
    });

    $(".close").click(function () {
        $("#myModal").hide();
    });
    $("i.fa.fa-pencil").click(function () {
        $("#myModal").show();
        $('.new__task').children("button").text("Edit");
    });

    $("button.add_task").click(function () {
        var title = $("input[name='Title']").val();
        alert("Tytul to: "+title);

    });




};
$(document).ready(function () {
    $("input[type=checkbox]").click(function () {
        $("#title1").toggle();
    });
});

